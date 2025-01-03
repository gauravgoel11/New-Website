import React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import profileImage from "/My Image2.jpg";

interface ProfileImageProps {
  imageUrl?: string;
  altText?: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "responsive";
}

const sizeClasses = {
  sm: "w-32 h-32",
  md: "w-48 h-48",
  lg: "w-64 h-64",
  xl: "w-[500px] h-[600px]",
  responsive:
    "w-[280px] h-[320px] sm:w-[380px] sm:h-[420px] md:w-[440px] md:h-[520px] lg:w-[500px] lg:h-[600px]",
};

const ProfileImage = ({
  imageUrl = profileImage,
  altText = "Gaurav Goel - Software Developer",
  className = "",
  size = "xl",
}: ProfileImageProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg p-2 sm:p-4 shadow-lg transition-transform duration-300 hover:scale-[1.02]",
        className,
      )}
    >
      <Avatar className={cn("rounded-lg object-cover", sizeClasses[size])}>
        <AvatarImage src={imageUrl} alt={altText} className="object-cover" />
        <AvatarFallback
          className={cn(
            "bg-muted flex items-center justify-center text-xl sm:text-2xl font-medium",
            sizeClasses[size],
          )}
        >
          GG
        </AvatarFallback>
      </Avatar>
    </div>
  );
};

export default ProfileImage;
