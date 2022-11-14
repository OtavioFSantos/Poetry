import { useMutation, useQueryClient } from "react-query";

const createPoem = (data: { content: string; author?: string }) =>
  fetch(`/api/poems/protected/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: data.content,
      author: data.author,
    }),
  }).then((res) => res.json());

export const useCreatePoem = (onSuccess) => {
  const queryClient = useQueryClient();

  return useMutation(
    "createPoem",
    ({ content, author }: { content: string; author?: string }) =>
      createPoem({ content, author }),
    {
      onSuccess: (_data) => {
        onSuccess();
        queryClient.invalidateQueries(["poems"]);
      },
    }
  );
};
