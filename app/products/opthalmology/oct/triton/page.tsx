import Dropdown from "@/components/dropdown/Dropdown";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <Dropdown />
    </section>
  );
}
