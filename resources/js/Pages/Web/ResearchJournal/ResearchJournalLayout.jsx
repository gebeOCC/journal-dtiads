import React from "react";
import AimScope from "./AimScope";
import AboutPublisher from "./AboutPublisher";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import SubmissionGuideline from "./SubmissionGuideline";
import ReviewProcess from "./ReviewProcess";
import Index from "./Index";
import WebLayout from "@/Layouts/WebLayout";

const contents = [
    {
        title: "Aims and Scope",
        page: AimScope,
    },
    {
        title: "About the Publisher",
        page: AboutPublisher,
    },
    {
        title: "Submission Guidelines",
        page: SubmissionGuideline,
    },
    {
        title: "Review Process",
        page: ReviewProcess,
    },
    {
      title: "Research Journals",
      page: Index,
  },
];

export default function ResearchJournalLayout() {
    return (
        <div className="pt-[64px] min-h-screen">
            <div className="-z-10 relative flex items-center justify-center">
                <img
                    src="https://cdn-images.zety.com/pages/how_long_should_a_cv_be_5.jpg"
                    alt="hhow_long_should_a_cv_be_5.jpg"
                    className="object-contain"
                />
                <h1 className="absolute text-white font-semibold text-xl sm:text-4xl drop-shadow-md">Research Journals</h1>
            </div>
            <div className="p-4">
                {contents.map((content, index) => (
                    <Accordion key={index} type="single" collapsible>
                        <AccordionItem value={`item-${index}`}>
                            <AccordionTrigger>{content.title}</AccordionTrigger>
                            <AccordionContent className="p-4">
                                <content.page />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

ResearchJournalLayout.layout = (page) => <WebLayout children={page} />;
