import { experiences } from '../data/experience';
import Reveal from './Reveal';

export default function Experiences() {
	return (
		<section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-gray-900 transition-colors duration-300 relative overflow-hidden">
			{/* Fondos artísticos */}
			<div className="absolute inset-0 pointer-events-none" aria-hidden="true">
				<div className="absolute top-[15%] -right-16 w-[350px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent rotate-[12deg] opacity-25" />
				<div className="absolute bottom-[20%] -left-10 w-[280px] h-[1px] bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent -rotate-[18deg] opacity-20" />
				<div className="absolute -top-10 -left-10 w-[200px] h-[200px] rounded-full border border-gray-200 dark:border-gray-800 opacity-15" />
				<div className="absolute -bottom-8 -right-8 w-[150px] h-[150px] rounded-full border border-gray-200 dark:border-gray-800 opacity-10" />
				<div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-700 opacity-25" />
				<div className="absolute top-[25%] right-[8%] w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700 opacity-20" />
			</div>

			<div className="max-w-6xl mx-auto relative z-10">
				<Reveal>
					<div className="mb-16">
						<h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4">
							Experiencias laborales
						</h2>
						<p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400">
							Historial laboral y roles
						</p>
					</div>
				</Reveal>

				<div className="space-y-6">
					{experiences.map((exp, idx) => (
						<Reveal key={idx} delay={idx * 120}>
							<div
								className="glass-card glow-on-hover border border-gray-200 dark:border-gray-700 p-6 md:p-8 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-lg relative overflow-hidden group"
							>
								{/* Acento decorativo */}
								<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gray-400 dark:from-gray-500 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

								<div className="flex items-start justify-between mb-2">
									<div>
										<h3 className="text-xl md:text-2xl font-mono font-bold text-black dark:text-white">
											{exp.company}
										</h3>
										<div className="text-sm font-mono text-gray-600 dark:text-gray-300">{exp.role}</div>
									</div>

									<div className="text-xs md:text-sm font-mono text-gray-500 dark:text-gray-400">{exp.duration}</div>
								</div>

								<p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
									{exp.description}
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	);
}
