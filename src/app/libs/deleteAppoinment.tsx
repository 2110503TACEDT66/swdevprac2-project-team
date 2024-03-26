export default async function deleteAppoinment(id: string, token: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/appoinments/${id}`,
    {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Failed to fetch campgrounds");
  }
  return await response.json();
}
