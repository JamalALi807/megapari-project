// pages/responsible-gambling.js
import React from "react";

const ResponsibleGambling = () => {
  const sections = [
    {
      title: "1. Responsible Gaming",
      content: [
        "Gambling problems are associated with poor mental health and can manifest in depression, anxiety, and suicidal thoughts. They also have an adverse effect on family relationships, work, academic performance, and can lead to bankruptcy or crime. Gambling should be an enjoyable pastime and not a way to make money.",
        "Unfortunately, in some cases, abuse of gambling can lead to problems. We take care of our customers and make every effort to provide a safe and reliable service which our customers can use without any damaging consequences.",
      ],
    },
    {
      title: "2. Underage Gambling Prevention",
      content: [
        "Our company does not allow underage gambling (for persons under the age of 18). We do not advertise our products and services to minors or mentally vulnerable people. We guarantee that our advertising, sponsorship, and marketing activities do not contain any information aimed at attracting underage persons to the Service.",
        "If you share your computer with underage persons, you should make sure that they do not have access to usernames, passwords, and banking details. There is software available for limiting access to gambling, for example, NetNanny and Cyber Patrol.",
      ],
    },
    {
      title: "3. Age Verification",
      content: [
        "We regularly carry out checks to determine the age of our customers to guarantee that all our players have reached the legal age.",
      ],
      list: [
        "In some cases, our checks cannot confirm the customer's age and we request the added information to confirm that the player has reached the legal age.",
        "Availability personal account may be limited until the necessary information and the fact that you have reached the legal age will be confirmed unambiguously.",
      ],
    },
    {
      title: "4. Responsible Behavior",
      content: [
        "Is your spending out of control? Here are some questions to help determine gambling habits:",
      ],
      list: [
        "Do you typically borrow money or steal to continue gambling?",
        "Have you been spending less time with your family and loved ones lately?",
        "Have you lost interest in your hobbies or usual leisure activities?",
      ],
    },
    {
      title: "5. Assistance",
      content: [
        "We offer self-exclusion services to restrict gambling activity. Customers can voluntarily set limits for periods of 1 month, 6 months, or 1 year.",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-slate-800">Responsible Gambling</h1>
      <section className="space-y-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold mb-2 text-gray-600">{section.title}</h2>
            {section.content.map((paragraph, idx) => (
              <p key={idx} className="mb-2 text-gray-400">{paragraph}</p>
            ))}
            {section.list && (
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResponsibleGambling;
