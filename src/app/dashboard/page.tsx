import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import FooTable from "@/components/FooTable";
import { db } from "@/db/drizzle";
import { WebTable } from "@/db/schema";

export default async function Page() {
  const webs = await db.select().from(WebTable);
  console.log(webs);
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
