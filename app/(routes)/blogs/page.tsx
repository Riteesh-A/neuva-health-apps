import { Blog7 } from "@/components/blog7";


export default function BlogsPage() {
  const tagline = "Insights & Updates";
  const heading = "Neuva Health Blog";
  const description = "Stay informed with the latest news, health tips, and research from Neuva Health. Explore expert advice, wellness guides, and updates on our services.";
  const buttonText = "Read all blog posts";
  const buttonUrl = "/blogs";
  const posts = [
    {
      id: "post-1",
      title: "5 Ways to Improve Your Mental Wellbeing",
      summary:
        "Discover practical strategies to boost your mental health and maintain emotional balance in your daily life.",
      label: "Wellness",
      author: "Dr. Priya Sharma",
      published: "10 Feb 2024",
      url: "/blogs/mental-wellbeing",
      image: "/assets/blogs/bg-bed-couple.jpg",
    },
    {
      id: "post-2",
      title: "Understanding Preventive Healthcare",
      summary:
        "Learn why preventive care is essential and how regular checkups can help you stay ahead of potential health issues.",
      label: "Prevention",
      author: "Dr. Arjun Patel",
      published: "22 Jan 2024",
      url: "/blogs/preventive-healthcare",
      image: "/assets/blogs/journey_to_better_health.svg",
    },
    {
      id: "post-3",
      title: "Nutrition Tips for a Healthier Life",
      summary:
        "Explore evidence-based nutrition advice to help you make healthier food choices and improve your overall wellbeing.",
      label: "Nutrition",
      author: "Neha Verma, RD",
      published: "5 Jan 2024",
      url: "/blogs/nutrition-tips",
      image: "/assets/blogs/fit-man-smiling.png",
    },
  ];
    return <Blog7 tagline={tagline} heading={heading} description={description} buttonText={buttonText} buttonUrl={buttonUrl} posts={posts}  />;
}