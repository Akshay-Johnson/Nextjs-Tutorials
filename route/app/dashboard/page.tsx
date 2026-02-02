import {Metadata} from "next";

export const metadata= {
  title: {
    absolute: "Dashboard",
  }
}

export default function Dashboard() {
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h1>Dashboard Page</h1>
    </div>
  );
}