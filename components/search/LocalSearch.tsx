"use client"
import Image from "next/image";
import {useSearchParams, useRouter, usePathname} from "next/navigation";
import {useEffect, useState} from "react";

import {Input} from "@/components/ui/input";
import {formUrlQuery, removeKeysFromUrlQuery} from "@/lib/url";


interface Props {
    imgSrc: string;
    route: string;
    otherClasses?: string
    placeholder: string;
}

const LocalSearch = ({ route, imgSrc, otherClasses, placeholder }: Props) => {
    const searchParams = useSearchParams();
    const query = searchParams.get("query") || "";
    const [searchQuery, setSearchQuery] = useState(query);
    const router = useRouter();
    const pathName = usePathname();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() =>{
            if(searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "query",
                    value: searchQuery
                });

                router.push(newUrl, { scroll: false })
            } else {
                if(pathName === route) {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["query"],
                    });

                    router.push(newUrl, { scroll: false})
                }
            }
        }, 1000)

        return () => clearTimeout(delayDebounceFn);

    }, [searchQuery, route, searchParams, router, pathName])

    return (
        <div className="background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4">

            <Image src={imgSrc} alt={"Search Icon"} width={24} height={24} className="cursor-pointer" />
            <Input
                className={`paragraph-regular no-focus placeholder:text-dark400_light700 border-none shadow-none outline-none ${otherClasses}`}
                type="text"
                placeholder={placeholder}
                value= {searchQuery}
                onChange={(e) => {setSearchQuery(e.target.value)}}

            />
        </div>
    )
}

export default LocalSearch