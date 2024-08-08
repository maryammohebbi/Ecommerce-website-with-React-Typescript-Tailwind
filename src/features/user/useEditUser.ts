import { useMutation } from "@tanstack/react-query";
import { updateUserApi, User } from "../services/authService";
import toast from "react-hot-toast";

interface UpdateUserArgs {
    userId: number;
    data: User;
}

export default function useEditUser() {
    const { mutate: updateUser, isPending: isUpdatingUser } = useMutation({
        mutationFn: ({ userId, data }: UpdateUserArgs) => updateUserApi(userId, data),
        onSuccess: () => {
            toast.success("User Updated Successfully.");
        },
        onError: () => {
            toast.error("Update User Failed.");
        }
    });

    return { updateUser, isUpdatingUser };
}
