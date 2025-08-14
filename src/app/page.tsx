import StudentTable from "../components/StudentTable";
import StudentSearch from "../components/StudentSearch";

async function HomePage() {
  const res = await fetch(
    "https://6895796f039a1a2b288f43fd.mockapi.io/api/students/students",
    {
      cache: "no-store",
    }
  );
  const students = await res.json();

  return (
    <div
      style={{
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Chào mừng đến với Trang Chủ</h1>
      <p>Quản lý danh sách sinh viên </p>
      <StudentSearch />

      <StudentTable initialData={students} />
    </div>
  );
}

export default HomePage;
