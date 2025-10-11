import { Meta } from "@once-ui-system/core";
import { baseURL, beyondTheLab } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: beyondTheLab.title,
    description: beyondTheLab.description,
    path: beyondTheLab.path,
    baseURL,
  });
}

export default function BeyondTheLabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
