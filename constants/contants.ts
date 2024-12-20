import HomeIcon from "@/public/homePageIcons/home.png";
import CodeIcon from "@/public/homePageIcons/code.png";
import CloudIcon from "@/public/homePageIcons/cloud.png";
import HowToIcon from "@/public/homePageIcons/book.png";
import SettingsIcon from "@/public/homePageIcons/gear.png";
import PhoneIcon from "@/public/homePageIcons/phone.png";
import SignOutIcon from "@/public/homePageIcons/sign-out.png";
import GithubIcon from "@/public/authPageIcons/github.png";
import BitBucketIcon from "@/public/authPageIcons/bitbucket.png";
import AzureIcon from "@/public/authPageIcons/azure.png";
import GitlabIcon from "@/public/authPageIcons/gitlab.png";
import KeyIcon from "@/public/authPageIcons/key.png";

export const SignInItems = [
  { icon: GithubIcon, text: "Sign in with Github" },
  { icon: BitBucketIcon, text: "Sign in with BitBucket" },
  { icon: AzureIcon, text: "Sign in with Azure Devops" },
  { icon: GitlabIcon, text: "Sign in with GitLab" },
];

export const SignInItemsSelf = [
  { icon: GitlabIcon, text: "Self Hosted GitLab" },
  { icon: KeyIcon, text: "Sign in with SSO" },
];

export const HomePageData = [
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

export const NavbarItems = [
  { icon: HomeIcon, name: "Repositories" },
  { icon: CodeIcon, name: "AI Code Review" },
  { icon: CloudIcon, name: "Cloud Security" },
  { icon: HowToIcon, name: "How to Use" },
  { icon: SettingsIcon, name: "Settings" },
];

export const BottomNavItems = [
  { icon: PhoneIcon, name: "Support" },
  { icon: SignOutIcon, name: "Logout" },
];
