
import JobCard from "@/components/jobs/JobCard";
import JobFilters from "@/components/jobs/JobFilters";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import MainLayout from "@/components/shared/MainLayout";

const jobData = [
  {
    id: "job-1",
    title: "Need Professional Video Editor for YouTube Gaming Channel",
    description: "Looking for an experienced video editor to help with my gaming YouTube channel that has 500k+ subscribers. You'll be responsible for editing gameplay footage, adding effects, creating engaging intros and outros. Need someone who can work with Adobe Premiere Pro and After Effects.",
    budget: {
      min: 300,
      max: 500,
      type: "fixed"
    },
    client: {
      id: "client-1",
      name: "GameMaster Studios",
      avatarUrl: "https://source.unsplash.com/ZHvM3XIOHoE",
      verified: true,
      rating: 4.8,
      reviewCount: 32
    },
    skills: ["Video Editing", "Adobe Premiere Pro", "After Effects", "Gaming", "YouTube"],
    duration: "1-3 weeks",
    applications: 18,
    createdAt: "2023-04-05T10:30:00Z",
    category: "video-editing",
    experience: "intermediate"
  },
  {
    id: "job-2",
    title: "Podcast Editor Needed for Weekly Business Podcast",
    description: "We run a weekly interview podcast about entrepreneurship and need a skilled podcast editor. You'll be responsible for cleaning up audio, removing filler words, adding intro/outro music, and ensuring professional sound quality. Experience with Adobe Audition required.",
    budget: {
      min: 100,
      max: 200,
      type: "fixed"
    },
    client: {
      id: "client-2",
      name: "StartupInsights",
      avatarUrl: "https://source.unsplash.com/sibVwORYqs0",
      verified: false,
      rating: 4.5,
      reviewCount: 12
    },
    skills: ["Podcast Editing", "Adobe Audition", "Audio Engineering", "Sound Design"],
    duration: "Ongoing",
    location: "Remote",
    applications: 7,
    createdAt: "2023-04-06T14:20:00Z",
    category: "podcast-editing",
    experience: "entry"
  },
  {
    id: "job-3",
    title: "Thumbnail Designer for Fashion YouTube Channel",
    description: "My fashion and beauty channel needs eye-catching thumbnails that convert. Looking for a designer who understands YouTube trends and can create thumbnails that drive clicks. Need someone who can work in Photoshop and has experience with fashion/beauty content.",
    budget: {
      min: 50,
      max: 100,
      type: "fixed"
    },
    client: {
      id: "client-3",
      name: "StyleByEmma",
      avatarUrl: "https://source.unsplash.com/W7b3eDUb_2I",
      verified: true,
      rating: 4.9,
      reviewCount: 28
    },
    skills: ["Thumbnail Design", "Photoshop", "YouTube", "Graphic Design", "Fashion"],
    duration: "Less than 1 week",
    applications: 24,
    createdAt: "2023-04-07T09:15:00Z",
    category: "thumbnail-design",
    experience: "any"
  },
  {
    id: "job-4",
    title: "2D Animation for Educational Content",
    description: "We create educational content about science and history. Looking for an animator who can create engaging 2D animations to explain complex concepts. Need clean, professional animations that are informative and visually appealing.",
    budget: {
      min: 1000,
      max: 2000,
      type: "fixed"
    },
    client: {
      id: "client-4",
      name: "LearnSmart Academy",
      avatarUrl: "https://source.unsplash.com/rPOmLGwai2w",
      verified: true,
      rating: 5.0,
      reviewCount: 19
    },
    skills: ["2D Animation", "After Effects", "Illustrator", "Educational Content", "Explainer Videos"],
    duration: "1-3 months",
    applications: 12,
    createdAt: "2023-04-03T11:45:00Z",
    category: "animation",
    experience: "expert"
  },
  {
    id: "job-5",
    title: "Voiceover Artist for Corporate Training Videos",
    description: "We need a professional voiceover artist with a warm, authoritative voice for our corporate training materials. Should have high-quality recording equipment and be able to deliver edited, clean audio files.",
    budget: {
      min: 200,
      max: 350,
      type: "fixed"
    },
    client: {
      id: "client-5",
      name: "CorpTrain Solutions",
      avatarUrl: "https://source.unsplash.com/DO9NER1X5o0",
      verified: false,
      rating: 4.7,
      reviewCount: 9
    },
    skills: ["Voiceover", "Audio Engineering", "Corporate", "Clear Dictation"],
    duration: "Less than 1 week",
    location: "Remote",
    applications: 16,
    createdAt: "2023-04-08T13:30:00Z",
    category: "voiceover",
    experience: "intermediate"
  },
  {
    id: "job-6",
    title: "Livestream Editor for Twitch Gaming Content",
    description: "I'm a Twitch streamer looking for an editor to create highlight reels and YouTube content from my livestreams. Need someone who can identify entertaining moments and create engaging videos optimized for YouTube.",
    budget: {
      min: 250,
      max: 400,
      type: "fixed"
    },
    client: {
      id: "client-6",
      name: "TwitchKing",
      avatarUrl: "https://source.unsplash.com/7YVZYZeITc8",
      verified: true,
      rating: 4.6,
      reviewCount: 23
    },
    skills: ["Livestream Editing", "Premiere Pro", "Gaming", "Twitch", "YouTube"],
    duration: "Ongoing",
    applications: 9,
    createdAt: "2023-04-04T16:20:00Z",
    category: "livestream",
    experience: "entry"
  }
];

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<any>({});
  const [sortOption, setSortOption] = useState("newest");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // In a real app, this would trigger an API call with the search query
  };

  const handleFilter = (filters: any) => {
    setActiveFilters(filters);
    // In a real app, this would trigger an API call with the filters
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 my-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">Find Creative Jobs</h1>
            <p className="text-gray-600 mt-1">
              Browse opportunities from creators around the world
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2 hidden md:inline">Sort by:</span>
              <select
                className="bg-white border border-gray-300 rounded-md px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="budget-high">Budget (High to Low)</option>
                <option value="budget-low">Budget (Low to High)</option>
                <option value="deadline">Deadline (Soonest)</option>
              </select>
            </div>
          </div>
        </div>
        
        <JobFilters onFilter={handleFilter} onSearch={handleSearch} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        
        <div className="flex justify-center mt-8">
          <Button variant="outline" className="flex items-center gap-1">
            Load More <FaChevronDown size={18} />
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Jobs;
