import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FooTable from "@/components/FooTable";

export default async function Page() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Submissions</CardTitle>
          <CardDescription>Recent submissions for review</CardDescription>
        </CardHeader>
        <CardContent>
          <FooTable />
        </CardContent>
      </Card>
    </section>
  );
}
