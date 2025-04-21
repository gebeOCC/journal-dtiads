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
];

export default function ResearchJournalLayout() {
    return (
        <div className="pt-[80px] p-4 min-h-screen">
            <h1>Research Journal</h1>
            {contents.map((content, index) => (
                <Accordion key={index} type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                        <AccordionTrigger>{content.title}</AccordionTrigger>
                        <AccordionContent>
                            <content.page />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}

ResearchJournalLayout.layout = page => <WebLayout children={page} />
