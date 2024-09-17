"use client";

import { ImPrevious } from "react-icons/im";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || "1";

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 10;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  console.log(hasNext);

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString());
    replace(`${pathname}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        <div className={`order border-bluePrimary  p-2 rounded-md ${!hasPrev ? "bg-gray-300" : "bg-bluePrimary hover:bg-blue-700" } `}>
        <GrLinkPrevious size={20}  />
        </div>
     
      </button>
      <button
        className={styles.button}
        disabled={!hasNext}
        onClick={() => handleChangePage("next")}
      >
          <div className={`order border-bluePrimary  p-2 rounded-md ${!hasNext ? "bg-gray-300" : "bg-bluePrimary hover:bg-blue-700" } `}>
        <GrLinkNext size={20}  />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
