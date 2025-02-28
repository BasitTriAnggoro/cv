import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";


interface Props {
  title: string;
  description: string;
  tags: readonly string[];
  link?: string;
  gifSrc?: string;
  videoSrc?: string;
  imgLink?: string;
}


export function ProjectCard({ title, description, tags, link, gifSrc, videoSrc, imgLink }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-muted p-3">
      {/* Header */}
      <CardHeader className="">
        <div className="space-y-1">
          <img src={imgLink} alt="" />  
          <CardTitle className="text-base">
            {link ? (
              <a
                href={link}
                target="_blank"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {title}{" "}
                <span className="size-1 rounded-full bg-green-500"></span>
              </a>
            ) : (
              title
            )}
          </CardTitle>
          <div className="hidden font-mono text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <div className="flex">
            {
              videoSrc ? 
                <video
                  src={videoSrc}
                  width="150px" 
                  // height="200px"
                  autoPlay={true}
                  controls={true}
                  loop={true}
                  muted={true}
                  playsInline={false}
                  // poster="https://via.placeholder.com/640x360.png?text=Video+Placeholder"
                >
                  Your browser does not support the video tag.
                </video>
                :
                ''
            }
            {
              gifSrc ? <img src={gifSrc ? gifSrc : undefined} /> : ''
            }
          </div>
          <CardDescription className="font-mono text-xs">
            {description}
          </CardDescription>
          
        <CardContent className="mt-auto flex">
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        </div>
      </CardHeader>
    </Card>
  );
}
