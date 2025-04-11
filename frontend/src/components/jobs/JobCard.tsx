
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Clock, DollarSign, MapPin, Star } from "lucide-react";


interface Client {
  id: string;
  name: string;
  avatarUrl: string; //NOT THIS
  verified: boolean;
  rating?: number;
  reviewCount?: number; //REVIEW ARRAY
}

interface JobBudget {
  min: number;
  max: number;
  type: "fixed" | "hourly";
}

interface Job {
  id: string;
  title: string;
  description: string;
  budget: JobBudget;
  client: Client;
  skills: string[];
  duration: string;
  location?: string;
  applications: number;
  createdAt: string;
  category: string;
  experience: "entry" | "intermediate" | "expert" | "any";
}

interface Freelancer {
  id: string;
  name: string;
  title: string;
  avatarUrl: string; // NOT THIS
  verified: boolean; // "bronze" | "silver" | "gold" | "diamond" | "platinum" 
  rating: number;
  reviewCount: number; //REVIEW ARRAY
  hourlyRate: number;
  skills: string[];
  description: string;
  completedJobs: number;
}

interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/jobs/${job.id}`}>
      <Card className="h-full card-hover overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={job.client.avatarUrl} />
                <AvatarFallback>{job.client.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-lg line-clamp-1">{job.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{job.client.name}</span>
                  {job.client.verified && (
                    <Badge variant="secondary" className="ml-2 py-0 h-5">
                      <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" /> 
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 line-clamp-2">{job.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {job.skills.map((skill, index) => (
              <Badge key={index} variant="outline" className="bg-brand-50">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="px-6 py-4 bg-gray-50 flex flex-wrap gap-y-2 gap-x-4 text-sm">
          <div className="flex items-center text-gray-500">
            <DollarSign className="h-4 w-4 mr-1 text-gray-400" />
            <span>${job.budget.min} - ${job.budget.max}</span>
          </div>
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-1 text-gray-400" />
            <span>{job.duration}</span>
          </div>
          {job.location && (
            <div className="flex items-center text-gray-500">
              <MapPin className="h-4 w-4 mr-1 text-gray-400" />
              <span>{job.location}</span>
            </div>
          )}
          <div className="ml-auto">
            <span className="text-brand-600 font-medium">
              {job.applications} applicant{job.applications !== 1 ? "s" : ""}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default JobCard;
