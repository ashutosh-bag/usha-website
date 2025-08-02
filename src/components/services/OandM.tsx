import Image from "next/image"

export default function OandM() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 font-lora bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Operation & Maintenance Services
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Usha Projects India is renowned for turnkey EPC and O&M services across coal & ash systems in thermal
              power and industrial installations. Their capabilities include planning, engineering, execution, testing,
              commissioning, and ongoing maintenance of coal handling and ash systems in major projects like NTPC
              Talcher, NALCO Angul, Municipal fertilizer plants, and more 
            </p>
          </div>
        </div>

        {/* Main Section Image */}
        <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] mt-12 rounded-lg overflow-hidden">
          <Image
            src="/assets/o&m/om.png"
            alt="Overview of industrial coal and ash handling plant"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-12 py-12 lg:grid-cols-2 lg:gap-16">
          {/* Coal Handling Plant (CHP) Section */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-2xl font-semibold leading-none tracking-tight">
                Coal Handling Plant (CHP): Operation & Maintenance
              </h2>
              <p className="text-sm text-muted-foreground">
                Ensuring the seamless and efficient movement of coal from receipt to boiler feed.
              </p>
            </div>
            <div className="p-6 pt-0 space-y-6 flex-grow">
              <div className="relative w-full h-[200px] rounded-md overflow-hidden">
                <Image
                  src="/assets/o&m/chp.webp"
                  alt="Coal handling plant conveyor system"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">System Design & Engineering</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>In-house EPC team handles concept, design, 3D modeling, structural and process engineering.</li>
                  <li>
                    Tools include CFD, FEM, parametric modeling and interactive design reviews for operability and
                    maintainability 
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Key Processes in Operation</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Coal unloading via wagon tipplers &rarr; transfer to crusher.</li>
                  <li>Primary crushing & screening to reduce size.</li>
                  <li>Conveyor system from crusher to stockpile or directly to silos.</li>
                  <li>Stacker-reclaimer builds and extracts coal stockpiles.</li>
                  <li>Mill feed&mdash;coal is sent to pulverizers and prepared for boiler burners.</li>
                  <li>
                    All equipment&mdash;conveyor belts, feeders, crushers&mdash;are calibrated for optimum throughput
                    and dust control 
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Maintenance Protocols</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>Scheduled inspections, lubrication, belt alignment, and component wear-life tracking.</li>
                  <li>
                    Vibration and condition monitoring on critical rotating parts like gearboxes, motors, and crushers.
                  </li>
                  <li>Dust suppression systems regularly checked, cleaned, and optimized.</li>
                  <li>Safety systems (cover guards, emergency stops) audited and tested monthly.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ash Handling Plant (AHP) Section */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm flex flex-col h-full">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-2xl font-semibold leading-none tracking-tight">
                Ash Handling Plant (AHP): Operation & Maintenance
              </h2>
              <p className="text-sm text-muted-foreground">
                Managing the safe and environmentally compliant disposal of ash generated from combustion processes.
              </p>
            </div>
            <div className="p-6 pt-0 space-y-6 flex-grow">
              <div className="relative w-full h-[200px] rounded-md overflow-hidden">
                <Image
                  src="/assets/o&m/ahp.jpg"
                  alt="Ash handling plant silo and pipeline"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">System Types & Process Flow</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    Usha provides both wet ash handling (hydraulic, bottom ash slurry extraction) and dry fly ash
                    systems (ESP collection + pneumatic conveyors to silos or bagging).
                  </li>
                  <li>
                    Projects include 195 km ash slurry pipelines (e.g., NALCO Angul), dense-phase fly ash conveyors,
                    silos, and bagging systems 
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Operation Steps</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>
                    **Bottom Ash:** Collected in submerged hoppers &rarr; flushed into slurry &rarr; pumped to ash pond
                    or pipeline.
                  </li>
                  <li>
                    **Fly Ash:** Retrieved from ESPs &rarr; intermediate and main silos via dilute- and dense-phase
                    pneumatic conveyors.
                  </li>
                  <li>
                    **Bagging / Loading:** For plants using ash for commercial cement or brick units, dry fly ash is
                    bagged and dispatched.
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Maintenance & O&M Best Practices</h3>
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  <li>ESP maintenance: electrode alignment, rapping mechanism, insulator cleaning.</li>
                  <li>Hopper inspections: avoid bridging or clogging; install vibrators/air blasters when needed.</li>
                  <li>
                    Pumps & slurry pipelines: seal monitoring, pressure & flow diagnostics, material wear tracking.
                  </li>
                  <li>Pneumatic conveyors: maintain proper air velocity, filter cleaning, leak detection.</li>
                  <li>
                    Silos & bagging lines: pressure relief valves, dust collection ducts, loader mechanisms checked.
                  </li>
                  <li>Scheduled inspections and lubrication for mechanical drives, valves and instrumentation.</li>
                  <li>Control & PLC systems: sensor calibration, software validation, SCADA uptime checks.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mx-auto max-w-6xl space-y-12 py-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Maintenance Management Framework</h2>
            <p className="text-muted-foreground md:text-lg">
              Usha employs CMMS/EAM tools, quality inspection teams with NDT, rotating machinery, and welding
              specialists to plan, log, and track scheduled and predictive maintenance 
            </p>
            <p className="text-muted-foreground md:text-lg">
              Reliability-centered design reviews are built into the EPC process to ensure operability, maintainability,
              and safety during the plant lifecycle 
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Environmental & Safety Integration</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground md:text-lg">
              <li>Dust control in CHP & AHP, ESP efficiency checks, and slurry containment in lined ponds.</li>
              <li>
                Compliance with Indian environmental norms regarding fly ash utilization and groundwater protection.
              </li>
              <li>
                HSE protocols include regular safety audits, equipment guarding, emergency response drills
               
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Project Highlights (Examples)</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground md:text-lg">
              <li>
                **NTPC Talcher / Kanhia, Odisha** &ndash; design, fabrication, erection, and commissioning of full coal
                handling and ash systems including ESPs, slurry pipelines, conveyors 
              </li>
              <li>
                **NALCO Angul** &ndash; 195 km ash slurry pipeline under EPC contract, complete ash handling systems
                
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Key Benefits of Usha’s O&M Offering</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground md:text-lg">
              <li>Single-source responsibility from engineering to maintenance.</li>
              <li>Reliable execution founded on deep expertise in coal, ash, slurry and piping systems.</li>
              <li>Optimized lifecycle cost, with robust maintenance plans built into project design.</li>
              <li>Environmental compliance and health safety standards embedded at all stages.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
