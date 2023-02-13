import { Arrow } from "@/icons/Arrow";
import { usePathname, useRouter } from "next/navigation";
import Button from "./Button";

interface PaginateProps {
  currentPage: number;
  pagesCount: number;
}

const Paginate = ({ currentPage, pagesCount }: PaginateProps) => {
  const router = useRouter();
  const pathname = usePathname();

  // navigate to page by it's index
  const navigate = (page: number) => {
    router.push(`${pathname}?page=${page}`);
  };

  return (
    <div className="flex items-center justify-between gap-4 mt-4">
      <Button
        icon={<Arrow className="rotate-[90deg]" clr="white" />}
        disabled={currentPage <= 0}
        onClick={() =>
          navigate(currentPage <= 0 ? currentPage : currentPage - 1)
        }
      >
        previous
      </Button>
      <div className="flex items-center gap-2">
        {currentPage >= 2 && (
          <Button
            variant="transparent"
            size="sm"
            onClick={() => navigate(0)}
          >
            0
          </Button>
        )}
        {currentPage > 2 && <span>...</span>}
        {[...Array(pagesCount + 1)].map((_, i) => {
          if (
            currentPage === i - 1 ||
            currentPage === i ||
            currentPage === i + 1
          ) {
            return (
              <Button
                key={i}
                variant={i === currentPage ? "secondary" : "transparent"}
                size="sm"
                onClick={() => navigate(i)}
              >
                {i.toString()}
              </Button>
            );
          }
        })}
        {pagesCount > currentPage + 2 && <span>...</span>}
        {pagesCount >= currentPage + 2 && (
          <Button
            variant="transparent"
            size="sm"
            onClick={() => navigate(pagesCount)}
          >
            {pagesCount.toString()}
          </Button>
        )}
      </div>
      <Button
        iconAfter
        icon={<Arrow className="rotate-[-90deg]" clr="white" />}
        disabled={currentPage >= pagesCount}
        onClick={() => navigate(currentPage + 1)}
      >
        next
      </Button>
    </div>
  );
};

export default Paginate;
