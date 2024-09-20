import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Calendar,
  MapPin,
  Shield,
  Utensils,
  Users,
  LucideIcon,
} from "lucide-react";
import BlogPost, { trekkingData } from "@/blogData";

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

interface HighlightProps {
  heading: string;
  description: string;
}

const BlogPostPage: React.FC = () => {
  const router = useRouter();
  const { blogId } = router.query;
  const trekkingPost = trekkingData.find(
    (post) => post.slug === (blogId as string)
  );

  if (!trekkingPost) {
    return <div className="text-center text-2xl mt-10">Blog post not found.</div>;
  }

  const {
    title,
    introduction,
    images,
    keyHighlights,
    trekkingExperiences,
    preparation,
    safety,
    bestTimeToTrek,
    preparationAndPermits,
    accommodationAndFood,
    safetyAndAcclimatization,
    culturalAndEnvironmentalResponsibility,
    conclusion,
  } = trekkingPost;

  const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
    <div className="mb-8 bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4 flex items-center border-b pb-2">
        {icon}
        <span className="ml-2">{title}</span>
      </h2>
      {children}
    </div>
  );

  const Highlight: React.FC<HighlightProps> = ({ heading, description }) => (
    <div className="mb-4">
      <h3 className="text-xl font-semibold mb-2">{heading}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8 pt-36 bg-gray-100">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold mb-6 text-center text-indigo-800"
      >
        {title}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg mb-8 bg-white rounded-lg shadow-md p-6"
          >
            {introduction}
          </motion.p>

          <Section title="Key Highlights" icon={<ChevronDown className="w-6 h-6 text-indigo-600" />}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyHighlights.highlights.map((highlight, index) => (
                <Highlight key={index} {...highlight} />
              ))}
            </div>
          </Section>

          {trekkingExperiences && (
            <Section title="Trekking Experiences" icon={<MapPin className="w-6 h-6 text-indigo-600" />}>
              {trekkingExperiences.experiences.map((experience, index) => (
                <Highlight key={index} {...experience} />
              ))}
            </Section>
          )}

          {preparation && (
            <Section title="Preparation" icon={<Users className="w-6 h-6 text-indigo-600" />}>
              {preparation.tips.map((tip, index) => (
                <Highlight key={index} {...tip} />
              ))}
            </Section>
          )}

          {safety && (
            <Section title="Safety" icon={<Shield className="w-6 h-6 text-indigo-600" />}>
              {safety.tips.map((tip, index) => (
                <Highlight key={index} {...tip} />
              ))}
            </Section>
          )}

          {preparationAndPermits && (
            <Section title="Preparation and Permits" icon={<Users className="w-6 h-6 text-indigo-600" />}>
              {preparationAndPermits.details.map((detail, index) => (
                <Highlight key={index} {...detail} />
              ))}
            </Section>
          )}

          {accommodationAndFood && (
            <Section title="Accommodation and Food" icon={<Utensils className="w-6 h-6 text-indigo-600" />}>
              {accommodationAndFood.details.map((detail, index) => (
                <Highlight key={index} {...detail} />
              ))}
            </Section>
          )}

          {safetyAndAcclimatization && (
            <Section title="Safety and Acclimatization" icon={<Shield className="w-6 h-6 text-indigo-600" />}>
              {safetyAndAcclimatization.tips.map((tip, index) => (
                <Highlight key={index} {...tip} />
              ))}
            </Section>
          )}

          {culturalAndEnvironmentalResponsibility && (
            <Section title="Cultural and Environmental Responsibility" icon={<Users className="w-6 h-6 text-indigo-600" />}>
              {culturalAndEnvironmentalResponsibility.tips.map((tip, index) => (
                <Highlight key={index} {...tip} />
              ))}
            </Section>
          )}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="text-2xl font-bold mb-4 text-indigo-800">Conclusion</h2>
            <p className="text-gray-700">{conclusion}</p>
          </motion.div>
        </div>

        <div className="md:col-span-1">
          {bestTimeToTrek && (
            <Section title="Best Time to Trek" icon={<Calendar className="w-6 h-6 text-indigo-600" />}>
              {bestTimeToTrek.seasons.map((season, index) => (
                <Highlight key={index} heading={season.season} description={season.description} />
              ))}
            </Section>
          )}

          {images && images.length > 0 && (
            <div className="sticky top-8">
              {images.map((image, index) => (
                <motion.img
                  key={image.id}
                  src={image.url}
                  alt={image.altText}
                  className="rounded-lg shadow-md mb-4 w-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;