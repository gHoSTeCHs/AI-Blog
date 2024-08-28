import React from 'react';
import Header from '../ui/header';
import { futureTechData } from '~/constants/data';
import FeatureBox from '../ui/featureBox';

const FutureTechSection = () => {
	return (
		<section>
			<div className="">
				<div className="bg-bg-secondary">
					<div className="py-20 container">
						<Header title="FutureTech Features" tag="Unlock the Power of" />
					</div>
				</div>

				<div className="bg-bg-primary container">
					<div className="">
						{futureTechData.map((techData, index) => {
							return (
								<div
									key={index}
									className={`${
										index == 1 ? '' : ''
									} grid grid-cols-12 place-items-center`}>
									<div className=" flex flex-col gap-[40px] col-span-4 ">
										<img src={techData.image} alt="" className="max-w-[48px]" />
										<div className="flex flex-col gap-[10px]">
											<h3 className="text-[30px] leading-none font-semibold">
												{techData.title}
											</h3>
											<p className="text-base text-text-secondary">
												{techData.description}
											</p>
										</div>
									</div>
									<div className="col-span-8 grid grid-cols-2 gap-5 pl-[50px] py-[60px]">
										{techData.cards.map((card) => {
											return <FeatureBox {...card} />;
										})}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FutureTechSection;
