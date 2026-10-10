import type { ReactNode } from "react";
import Image from "next/image";

const LINKS = {
	instagram: "https://instagram.com/hiresflow",
	whatsappChannel: "https://whatsapp.com/channel/XXXXXXXX",
	whatsappGroup: "https://chat.whatsapp.com/XXXXXXXX",
	email: "hi@hiresflow.com",
};

const METRICS = [
	{ value: "2,000+", label: "Community Talents" },
	{ value: "500+", label: "Channel Subscribers" },
	{ value: "X,XXX+", label: "Instagram Followers" },
	{ value: "100%", label: "Human Vetted" },
];

const STEPS = [
	{
		title: "Active Scouting",
		desc:
			"We monitor company career pages, founder posts, and hiring networks every day to find real openings.",
	},
	{
		title: "Relevance Filtering",
		desc:
			"Every role is checked by a human. Ghost jobs, duplicates, and off-topic listings never make it through.",
	},
	{
		title: "Rapid Distribution",
		desc:
			"Vetted roles go straight to Instagram and WhatsApp, so you see them while they are still open.",
	},
];

const ROADMAP = [
	{
		title: "Automated Ingestion",
		desc:
			"Pipelines that collect roles from across the web and structure them automatically, still reviewed by a human.",
		icon: "ingest",
	},
	{
		title: "Contextual Matching",
		desc:
			"Match roles to your skills, stack, and career goals instead of making you scroll through everything.",
		icon: "match",
	},
	{
		title: "Smart Summaries",
		desc:
			"Each role condensed into a clear snapshot: what the team does, what they need, and why it fits you.",
		icon: "summary",
	},
];

function Icon({
	name,
	className = "h-5 w-5",
}: {
	name: string;
	className?: string;
}) {
	const common = {
		className,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 1.8,
		strokeLinecap: "round" as const,
		strokeLinejoin: "round" as const,
		"aria-hidden": true,
	};
	switch (name) {
		case "bolt":
			return (
				<svg {...common}>
					<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
				</svg>
			);
		case "spark":
			return (
				<svg {...common}>
					<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
				</svg>
			);
		case "ingest":
			return (
				<svg {...common}>
					<path d="M12 3v12m0 0-4-4m4 4 4-4M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
				</svg>
			);
		case "match":
			return (
				<svg {...common}>
					<circle cx="9" cy="12" r="5" />
					<circle cx="15" cy="12" r="5" />
				</svg>
			);
		case "summary":
			return (
				<svg {...common}>
					<path d="M5 6h14M5 12h14M5 18h8" />
				</svg>
			);
		case "x":
			return (
				<svg {...common}>
					<path d="M6 6l12 12M18 6 6 18" />
				</svg>
			);
		case "check":
			return (
				<svg {...common}>
					<path d="m5 12 5 5 9-10" />
				</svg>
			);
		case "arrow":
			return (
				<svg {...common}>
					<path d="M5 12h14m-6-6 6 6-6 6" />
				</svg>
			);
		case "mail":
			return (
				<svg {...common}>
					<rect x="3" y="5" width="18" height="14" rx="2" />
					<path d="m3 7 9 6 9-6" />
				</svg>
			);
		case "instagram":
			return (
				<svg {...common}>
					<rect x="3" y="3" width="18" height="18" rx="5" />
					<circle cx="12" cy="12" r="4" />
					<circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
				</svg>
			);
		case "whatsapp":
			return (
				<svg {...common}>
					<path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 19.6L3 21Z" />
					<path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8a3.5 3.5 0 0 1-1.6-1.6l.8-1-1-2L9 9.5Z" />
				</svg>
			);
		default:
			return null;
	}
}

function Logo({ light = false }: { light?: boolean }) {
	return (
		<a
			href="#top"
			className="flex items-center gap-2"
			aria-label="HiresFlow home">
			<Image
				src="/icon.jpg"
				alt="HiresFlow logo"
				width={32}
				height={32}
				className="h-8 w-8 rounded-xl object-cover"
			/>
			<span
				className={`text-lg font-semibold tracking-tight ${light ? "text-white" : "text-black"}`}>
				HiresFlow
			</span>
		</a>
	);
}

function Badge({
	children,
	dark = false,
}: {
	children: ReactNode;
	dark?: boolean;
}) {
	return (
		<span
			className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${
				dark
					? "border-white/15 bg-white/5 text-zinc-200"
					: "border-zinc-200 bg-white text-zinc-700"
			}`}>
			{children}
		</span>
	);
}

export default function Home() {
	return (
		<div
			id="top"
			className="min-h-screen bg-zinc-50 p-2 font-sans text-zinc-900 sm:p-3">
			<div className="mx-auto flex max-w-6xl flex-col gap-2 sm:gap-3">
				<header className="sticky top-2 z-50 rounded-2xl border border-zinc-200/80 bg-white/90 px-4 py-3 shadow-sm backdrop-blur sm:top-3 sm:px-6">
					<div className="flex flex-wrap items-center justify-between gap-3">
						<Logo />

						<div
							role="tablist"
							aria-label="Audience"
							className="order-last flex w-full items-center justify-center rounded-full border border-zinc-200 bg-zinc-100 p-1 text-sm md:order-none md:w-auto">
							<button
								role="tab"
								aria-selected="true"
								className="flex-1 rounded-full bg-black px-4 py-1.5 font-medium text-white md:flex-none">
								For Talent
							</button>
							<div className="group relative flex-1 md:flex-none">
								<button
									role="tab"
									aria-selected="false"
									aria-disabled="true"
									tabIndex={0}
									className="w-full cursor-not-allowed rounded-full px-4 py-1.5 font-medium text-zinc-400">
									For HR <span className="text-xs">(Coming Soon)</span>
								</button>
								<div
									role="tooltip"
									className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-56 -translate-x-1/2 rounded-xl bg-black px-3 py-2 text-center text-xs leading-5 text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
									Automated hiring portal coming soon. Manual submission via DM
								</div>
							</div>
						</div>

						<a
							href={LINKS.whatsappChannel}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
							Join Channel
						</a>
					</div>
				</header>

				<main className="flex flex-col gap-2 sm:gap-3">
					<section className="relative overflow-hidden rounded-3xl bg-white px-5 py-16 text-center sm:px-10 sm:py-24">
						<div
							aria-hidden
							className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(99,102,241,0.12),transparent)]"
						/>
						<div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6">
							<Badge>
								<Icon name="bolt" className="h-3.5 w-3.5 text-indigo-600" />
								Curated Daily for Tech &amp; Creative
							</Badge>
							<h1 className="text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
								Curated Tech &amp; Creative Roles. High Signal, Zero Noise.
							</h1>
							<p className="max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
								Daily curated opportunities across software engineering, product, and
								digital design. Delivered straight to active community channels.
							</p>
							<div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
								<a
									href={LINKS.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-7 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
									<Icon name="instagram" className="h-4 w-4" />
									Open Instagram
								</a>
								<a
									href={LINKS.whatsappChannel}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white px-7 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50">
									<Icon name="whatsapp" className="h-4 w-4" />
									Join WhatsApp
								</a>
							</div>
						</div>
					</section>

					<section
						aria-label="Community traction"
						className="rounded-3xl bg-white px-5 py-8 sm:px-10 sm:py-10">
						<dl className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-0 md:divide-x md:divide-zinc-200">
							{METRICS.map((m) => (
								<div
									key={m.label}
									className="flex flex-col items-center gap-1 text-center md:px-4">
									<dt className="order-2 text-sm text-zinc-500">{m.label}</dt>
									<dd className="order-1 text-3xl font-semibold tracking-tight sm:text-4xl">
										{m.value}
									</dd>
								</div>
							))}
						</dl>
					</section>

					<section className="rounded-3xl bg-white px-5 py-16 sm:px-10 sm:py-24">
						<div className="mx-auto max-w-3xl text-center">
							<Badge>Why Tech &amp; Creative Focus</Badge>
							<h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
								Job boards were not built for digital talent
							</h2>
							<p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-600">
								Conventional portals bury real openings under spam and ghost jobs. We
								filter for the roles that actually matter to people building digital
								products.
							</p>
						</div>

						<div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
							<div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6">
								<p className="text-sm font-medium text-zinc-500">Typical job portals</p>
								<ul className="mt-5 flex flex-col gap-4 text-sm text-zinc-600">
									{[
										"Flooded with spam and duplicate listings",
										"Ghost jobs that were never real openings",
										"Every industry mixed into one endless feed",
										"Hours of scrolling to find a relevant role",
									].map((t) => (
										<li key={t} className="flex items-start gap-3">
											<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-zinc-200 text-zinc-500">
												<Icon name="x" className="h-3 w-3" />
											</span>
											{t}
										</li>
									))}
								</ul>
							</div>

							<div className="rounded-2xl border border-indigo-200 bg-gradient-to-b from-indigo-50 to-white p-6 shadow-sm">
								<p className="text-sm font-medium text-indigo-700">HiresFlow</p>
								<ul className="mt-5 flex flex-col gap-4 text-sm text-zinc-800">
									{[
										"Every role checked by a real person",
										"Only active, verifiable openings",
										"Focused on tech, product, and creative",
										"Delivered where you already spend time",
									].map((t) => (
										<li key={t} className="flex items-start gap-3">
											<span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white">
												<Icon name="check" className="h-3 w-3" />
											</span>
											{t}
										</li>
									))}
								</ul>
							</div>
						</div>
					</section>

					<section className="rounded-3xl bg-white px-5 py-16 sm:px-10 sm:py-24">
						<div className="mx-auto max-w-3xl text-center">
							<Badge>How It Works Today</Badge>
							<h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
								From scouting to your feed in three steps
							</h2>
						</div>

						<ol className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
							{STEPS.map((s, i) => (
								<li
									key={s.title}
									className="flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/60 p-6">
									<span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-semibold text-white">
										{i + 1}
									</span>
									<h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
									<p className="text-sm leading-6 text-zinc-600">{s.desc}</p>
								</li>
							))}
						</ol>

						<div className="mt-10 flex justify-center">
							<a
								href={LINKS.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-7 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
								Explore Feed
								<Icon name="arrow" className="h-4 w-4" />
							</a>
						</div>
					</section>

					<section className="relative overflow-hidden rounded-3xl bg-[#0a0a0f] px-5 py-16 text-white sm:px-10 sm:py-24">
						<div
							aria-hidden
							className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-indigo-600/25 blur-[120px]"
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute -bottom-32 -right-16 h-[28rem] w-[28rem] rounded-full bg-teal-500/25 blur-[130px]"
						/>
						<div
							aria-hidden
							className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
						/>

						<div className="relative mx-auto max-w-3xl text-center">
							<Badge dark>
								<span className="relative flex h-2 w-2">
									<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
									<span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
								</span>
								In Development
							</Badge>
							<h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
								The Shift Toward Intelligent Career Matching
							</h2>
							<p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-400">
								Manual curation got us here. Next, we are building an AI engine that
								does the heavy lifting while humans keep quality in check.
							</p>
						</div>

						<div className="relative mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
							{ROADMAP.map((r) => (
								<div
									key={r.title}
									className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-colors hover:border-teal-400/40 hover:bg-white/[0.07]">
									<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/30 to-teal-400/30 text-teal-200 ring-1 ring-white/10">
										<Icon name={r.icon} />
									</span>
									<h3 className="mt-5 text-lg font-semibold tracking-tight">
										{r.title}
									</h3>
									<p className="mt-2 text-sm leading-6 text-zinc-400">{r.desc}</p>
								</div>
							))}
						</div>
					</section>

					<section className="relative overflow-hidden rounded-3xl bg-white px-5 py-16 text-center sm:px-10 sm:py-24">
						<div
							aria-hidden
							className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(60%_100%_at_50%_100%,rgba(20,184,166,0.12),transparent)]"
						/>
						<div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
							<h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">
								Ready to Find Your Next Opportunity?
							</h2>
							<p className="max-w-md text-base leading-7 text-zinc-600">
								Join the community and get high-signal roles in your pocket every day.
							</p>
							<a
								href={LINKS.whatsappChannel}
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-black px-8 text-sm font-medium text-white transition-colors hover:bg-zinc-800">
								Join Channel
								<Icon name="arrow" className="h-4 w-4" />
							</a>
						</div>
					</section>
				</main>

				<footer className="rounded-3xl bg-[#0a0a0f] px-5 py-12 text-zinc-400 sm:px-10">
					<div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
						<div className="flex max-w-xs flex-col gap-4">
							<Logo light />
							<p className="text-sm leading-6">
								Curated tech and creative opportunities, delivered where the community
								already is.
							</p>
						</div>

						<div className="grid grid-cols-1 gap-8 text-sm sm:grid-cols-2 sm:gap-16">
							<div className="flex flex-col gap-3">
								<p className="font-medium text-white">Community</p>
								<a
									href={LINKS.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 transition-colors hover:text-white">
									<Icon name="instagram" className="h-4 w-4" /> Instagram
								</a>
								<a
									href={LINKS.whatsappChannel}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 transition-colors hover:text-white">
									<Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Channel
								</a>
								<a
									href={LINKS.whatsappGroup}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center gap-2 transition-colors hover:text-white">
									<Icon name="whatsapp" className="h-4 w-4" /> WhatsApp Group
								</a>
							</div>

							<div className="flex flex-col gap-3">
								<p className="font-medium text-white">Contact</p>
								<a
									href={`mailto:${LINKS.email}`}
									className="flex items-center gap-2 transition-colors hover:text-white">
									<Icon name="mail" className="h-4 w-4" /> {LINKS.email}
								</a>
							</div>
						</div>
					</div>

					<div className="mt-10 border-t border-white/10 pt-6 text-xs">
						© 2026 HiresFlow. Tech &amp; Creative Career Hub.
					</div>
				</footer>
			</div>
		</div>
	);
}
