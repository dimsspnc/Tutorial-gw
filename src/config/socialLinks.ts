// Social Links Configuration - uses environment variables only
export const socialLinks = {
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/dimsspnc",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/dimas-ponco-79001240b/",
  email: import.meta.env.VITE_EMAIL || "dimasponcoprabowod@gmail.com",
  resume: "/Tutorial-gw/resume.pdf", 
  repositories: {
    project1: import.meta.env.VITE_GITHUB_PROJECT1_URL || "",
  }
};

export default socialLinks;