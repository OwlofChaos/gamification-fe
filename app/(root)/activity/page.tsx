import { withMetadata } from "@/app/utils/withMetadata";
import ActivityClient from "./ActivityClient";

export const metadata = withMetadata(
  "Aktivitas Belajar",
  "Temukan berbagai tugas, quiz, dan game seru!"
);

export default function ActivityPage() {
  return <ActivityClient />;
}
