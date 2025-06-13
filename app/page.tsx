import MenuButton from "@/components/menuButton";
import MenuInput from "@/components/menuInput";

export default function Home() {
  return (
    <div>
      <MenuButton content="Jack Sucks" icon="/pencil.svg" />
      <MenuInput content="Username" />
      <MenuInput content="Password" />
      <MenuInput content="Names" />
    </div>

  );
}
