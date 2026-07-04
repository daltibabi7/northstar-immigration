import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { sql } from "@vercel/postgres";
import AdminDashboardClient from "./AdminDashboardClient";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  
  // Protect route
  if (!session || (session.user as any)?.email !== "admin@northstar.ca") {
    redirect("/portal/login");
  }

  let users = [];
  let documents = [];
  
  try {
    const usersResult = await sql`SELECT id, name, email, role, status, created_at FROM users`;
    users = usersResult.rows as any[];

    const docsResult = await sql`SELECT id, user_id, name, url, type, uploaded_at FROM documents`;
    documents = docsResult.rows as any[];
  } catch (e) {
    console.error("Admin DB fetch error (might not be initialized yet):", e);
  }

  return <AdminDashboardClient users={users} documents={documents} />;
}
