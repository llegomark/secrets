import { redirect } from "next/navigation";

export default function Page(props: { params: { compositeKey: string } }) {
  return redirect(`/unseal#${props.params.compositeKey}`);
}
