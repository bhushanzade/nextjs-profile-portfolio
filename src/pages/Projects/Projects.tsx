import ListProjects from "@components/Projects/ListProjects";

export default function ProjectsPage() {
  return (
    <>
      <section className="relative px-20 py-20 overflow-hidden">
        <div className="flex justify-center">
          <h1 className="text-7xl font-semibold uppercase tracking-wider text-color-change-animation">Projects & Works</h1>
        </div>
      </section>
      <section className="relative px-20 py-20 !pt-5 overflow-hidden">
        <ListProjects />
      </section>
    </>
  )
}