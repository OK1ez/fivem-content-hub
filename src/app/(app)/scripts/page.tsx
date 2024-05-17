import Filter from "@/components/filter";
import MobileFilter from "@/components/mobile-filter";
import { Button } from "@/components/ui/button";

export default function ScriptsPage() {
	return(
		<div className="flex md:space-x-16">
			<Filter />
			<div>
				<div className="flex justify-between">
					<h1 className="font-bold text-sm md:text-xl">Scripts</h1>
					<MobileFilter />
				</div>
				<div>
					
				</div>
			</div>
		</div>
	)
}