import { achievementData, HeroTabsData } from '~/constants/data';
import Achievement from '../ui/achievement';
import HeroTab from '../ui/heroTab';
import images from '~/constants/images';
import LinkTab from '../ui/linkTab';

const Hero = () => {
	return (
		<div className="">
			<div className="grid grid-cols-12 ">
				<div className="col-span-7 w-full ">
					<div className="pl-[]">
						<div className="px-[50px] py-[100px] flex flex-col gap-5">
							<p className="text-text-secondary text-[22px] leading-none font-medium">
								Your Journey to Tomorrow Begins Here
							</p>
							<div className="flex flex-col gap-[14px]">
								<h1 className="text-[55px] leading-none">
									Explore the Frontiers of Artificial Intelligence
								</h1>
								<p className="text-base text-text-secondary">
									Welcome to the epicenter of AI innovation. FutureTech AI News
									is your passport to a world where machines think, learn, and
									reshape the future. Join us on this visionary expedition into
									the heart of AI.
								</p>
							</div>
						</div>
					</div>
					<div className=" border border-border border-r-0 border-l-0 border-b-0 border-t">
						<div className="grid grid-cols-3">
							{achievementData.map((data, index) => {
								return (
									<Achievement
										key={index}
										{...data}
										classname={
											index === 1
												? 'border border-border border-y-0'
												: index === 0
												? 'pl-[50px]'
												: ''
										}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div
					style={{
						backgroundImage: `url(${images.abstract})`,
						backgroundSize: 'cover, cover',
						backgroundPosition: 'center, center',
						backgroundRepeat: 'no-repeat, no-repeat',
					}}
					className="flex flex-col p-[50px] justify-end col-span-5 border border-border border-r-0 border-l border-y-0 w-full">
					<div className="flex flex-col gap-5">
						<div className="">
							<div className="inline-block">
								<div className="flex bg-bg-secondary p-3 border border-border rounded-full">
									<img src={images.person1} alt="" />
									<img src={images.person2} alt="" className="ml-[-12px]" />
									<img src={images.person3} alt="" className="ml-[-12px]" />
									<img src={images.person4} alt="" className="ml-[-12px]" />
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-[6px]">
							<h3 className="text-xl font-medium">Explore 1000+ resources</h3>
							<p className="text-base text-text-secondary">
								Over 1,000 articles on emerging tech trends and breakthroughs.
							</p>
						</div>
						<LinkTab title="Explore Resources" />
					</div>
				</div>
			</div>
			<div className="border border-border border-x-0 ">
				<div className="container grid grid-cols-3">
					{HeroTabsData.map((tabData, index) => {
						return (
							<HeroTab
								key={index}
								{...tabData}
								classname={
									index === 1
										? 'border border-border border-y-0'
										: index === 0
										? 'pl-0'
										: ''
								}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Hero;
