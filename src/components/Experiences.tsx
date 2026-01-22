
import React from 'react';
import { experiences } from '../data/experience';

export default function Experiences() {
	return (
		<section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
			<div className="max-w-6xl mx-auto">
				<div className="mb-16">
					<h2 className="text-3xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4">
						Experiencias
					</h2>
					<p className="text-sm md:text-base font-mono text-gray-600 dark:text-gray-400">
						Historial laboral y roles
					</p>
				</div>

				<div className="space-y-6">
					{experiences.map((exp, idx) => (
						<div
							key={idx}
							className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 p-6 md:p-8 transition-all duration-300 hover:border-black dark:hover:border-white hover:shadow-lg"
						>
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
					))}
				</div>
			</div>
		</section>
	);
}
