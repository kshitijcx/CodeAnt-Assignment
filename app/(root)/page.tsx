const HomePageData = [
  {
    name: "design-system",
    visible: "Public",
    lang: "React",
    size: "7320 KB",
    updated: "Updated 1 day ago",
  },
  {
    name: "codeant-ci-app",
    visible: "Private",
    lang: "Javascript",
    size: "5871 KB",
    updated: "Updated 2 days ago",
  },
  {
    name: "analytics-dashboard",
    visible: "Private",
    lang: "Python",
    size: "4521 KB",
    updated: "Updated 5 days ago",
  },
  {
    name: "mobile-app",
    visible: "Public",
    lang: "Swift",
    size: "3096 KB",
    updated: "Updated 3 days ago",
  },
  {
    name: "e-commerce-platform",
    visible: "Private",
    lang: "Java",
    size: "6210 KB",
    updated: "Updated 6 days ago",
  },
  {
    name: "blog-website",
    visible: "Public",
    lang: "HTML/CSS",
    size: "1876 KB",
    updated: "Updated 4 days ago",
  },
  {
    name: "social-network",
    visible: "Private",
    lang: "PHP",
    size: "5432 KB",
    updated: "Updated 7 days ago",
  },
];

const page = () => {
  return (
    <div className="border-2 rounded-xl flex flex-1 bg-white flex-col py-5">
      <div className="flex justify-between border-b">
        <div>
          <p>Repositories</p>
          <p>33 total repositories</p>
          <div>
            <input type="text" />
          </div>
        </div>
        <div>
          <button>Referesh All</button>
          <button>Add Repository</button>
        </div>
      </div>
      <div className="">
        {HomePageData.map((item, index) => (
          <div key={index} className="border-b-2">
            <div>
              <p>
                {item.name} <span>{item.visible}</span>
              </p>
            </div>
            <div className="flex">
              <p>{item.lang}</p>
              <p>{item.size}</p>
              <p>{item.updated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default page;
