const projects = [
  {
    title: "AWS Bedrock-Powered Chatbot",
    description: "Developed an intelligent chatbot integrated with Amazon Bedrock to provide natural language interactions using foundation models. The application allows users to type queries or upload documents (PDF/images), and receive context-aware responses in real-time.",
    link: "https://github.com/AbilashEG/Bedrock-chatbot"
  },
  {
    title: "CVE_API",
    description: "Built a RESTful API application in Flask that integrates with the NVD (National Vulnerability Database) to fetch and serve real-time CVE (Common Vulnerabilities and Exposures) data. Designed to help security analysts and developers stay updated on software vulnerabilities through a dynamic web interface.",
    link: "https://github.com/AbilashEG/CVE_API"
  },
  {
    title: "Diabetes-prediction",
    description: "Built a machine learning model using XGBoost to predict the likelihood of diabetes based on medical attributes. The project includes data preprocessing, model training, and prediction scripts, with a clean and modular codebase designed for scalability and easy integration.",
    link: "https://github.com/AbilashEG/diabetes-prediction"
  },

   {
    title: "Aws-quicksight-dashboard",
    description: "Developed an interactive data visualization dashboard using Amazon QuickSight by connecting to data sources like S3 and Athena. Created real-time dashboards with key metrics and filters to enable clear, actionable insights.",
    link: "https://github.com/AbilashEG/aws-quicksight-dashboard-project"
  }
  
  
  // Add more projects as needed
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-display font-bold text-primary mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-white shadow rounded-lg p-6 transition-transform transition-shadow duration-300 hover:scale-105 hover:shadow-glow-primary"
            >
              <h3 className="text-black text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-700 mb-4">{proj.description}</p>
              <a
  href={proj.link}
  target="_blank"
  rel="noopener noreferrer"
  className="text-black underline"
>
  View on GitHub
</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
