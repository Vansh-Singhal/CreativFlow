
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";
import { Search, Filter, X } from "lucide-react";

interface JobFiltersProps {
  onFilter: (filters: any) => void;
  onSearch: (query: string) => void;
}

const JobFilters = ({ onFilter, onSearch }: JobFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [budgetRange, setBudgetRange] = useState([0, 10000]);
  
  const categories = [
    { id: "video-editing", label: "Video Editing" },
    { id: "thumbnail-design", label: "Thumbnail Design" },
    { id: "animation", label: "Animation" },
    { id: "voiceover", label: "Voiceover" },
    { id: "scriptwriting", label: "Scriptwriting" },
    { id: "color-grading", label: "Color Grading" },
    { id: "podcast-editing", label: "Podcast Editing" },
    { id: "livestream", label: "Livestream Editing" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  return (
    <div className="mb-8">
      {/* Search bar */}
      <form onSubmit={handleSearch} className="relative mb-4 md:mb-6">
        <Input
          placeholder="Search for jobs..."
          className="pr-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          <Search size={18} />
        </button>
      </form>

      {/* Mobile filters toggle */}
      <div className="flex justify-between items-center md:hidden mb-4">
        <Button
          variant="outline"
          size="sm"
          className="flex items-center"
          onClick={toggleMobileFilters}
        >
          <Filter size={16} className="mr-1" />
          Filters
        </Button>
        <Button variant="ghost" size="sm">
          Sort
        </Button>
      </div>

      {/* Filters - desktop always visible, mobile conditional */}
      <div
        className={`${
          showMobileFilters ? "block" : "hidden"
        } md:block bg-white md:bg-transparent rounded-lg md:rounded-none p-4 md:p-0 shadow-md md:shadow-none`}
      >
        {showMobileFilters && (
          <div className="flex justify-between items-center mb-4 md:hidden">
            <h3 className="font-medium">Filters</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileFilters}
            >
              <X size={18} />
            </Button>
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div>
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="experience">Experience Level</Label>
            <Select>
              <SelectTrigger id="experience">
                <SelectValue placeholder="Any Experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Experience</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="expert">Expert</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="project-length">Project Length</Label>
            <Select>
              <SelectTrigger id="project-length">
                <SelectValue placeholder="Any Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Any Duration</SelectItem>
                <SelectItem value="short">Less than 1 week</SelectItem>
                <SelectItem value="medium">1-4 weeks</SelectItem>
                <SelectItem value="long">1-3 months</SelectItem>
                <SelectItem value="ongoing">Ongoing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="mb-2 block">Budget Range</Label>
            <div className="px-2">
              <Slider
                defaultValue={[0, 10000]}
                max={10000}
                step={100}
                onValueChange={(value) => setBudgetRange(value)}
              />
            </div>
            <div className="flex items-center justify-between mt-2 text-sm">
              <span>${budgetRange[0]}</span>
              <span>${budgetRange[1]}+</span>
            </div>
          </div>
        </div>

        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="more-filters">
            <AccordionTrigger className="py-2 text-sm">
              More filters
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Job Type</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="one-time" />
                      <label
                        htmlFor="one-time"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        One-time project
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="recurring" />
                      <label
                        htmlFor="recurring"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Recurring project
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="contract" />
                      <label
                        htmlFor="contract"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Contract
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Client Rating</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="four-up" />
                      <label
                        htmlFor="four-up"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        4+ stars
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="verified" />
                      <label
                        htmlFor="verified"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verified clients only
                      </label>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Posted Time</h4>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="last-24" />
                      <label
                        htmlFor="last-24"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last 24 hours
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="last-3d" />
                      <label
                        htmlFor="last-3d"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last 3 days
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="last-week" />
                      <label
                        htmlFor="last-week"
                        className="text-sm font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Last week
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              // Reset filters logic
              setBudgetRange([0, 10000]);
            }}
          >
            Reset filters
          </Button>
          <Button 
            size="sm" 
            className="bg-brand-600 hover:bg-brand-700"
            onClick={() => {
              onFilter({
                budget: budgetRange,
                // Add other filter values here
              });
              if (showMobileFilters) toggleMobileFilters();
            }}
          >
            Apply filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobFilters;
