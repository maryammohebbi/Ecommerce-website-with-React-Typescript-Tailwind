// import { useQuery } from "@tanstack/react-query";
// import { getAllCategoryApi } from "../services/categoryService";
// // import { AxiosResponse } from "axios";

// export default function useCategories(): {
//     isCategoriesLoading: boolean;
//     categories: unknown
// } {
//     const { isLoading: isCategoriesLoading, data: categories } = useQuery({
//         queryFn: getAllCategoryApi,
//         queryKey: ["categories"],
//     })

//     return { isCategoriesLoading, categories };
// }

import { useQuery } from "@tanstack/react-query";
import { getAllCategoryApi } from "../services/categoryService";
import { AxiosResponse } from "axios";

type Categories = string[];

export default function useCategories(): {
    isCategoriesLoading: boolean;
    categories: Categories | undefined;
} {
    const { isLoading: isCategoriesLoading, data: categoriesResponse } = useQuery<AxiosResponse<Categories>>({
        queryFn: getAllCategoryApi,
        queryKey: ["categories"],
    });

    const categories = categoriesResponse?.data;

    return { isCategoriesLoading, categories };
}