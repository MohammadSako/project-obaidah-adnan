import { createClient } from '@/utils/supabase/static-props'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PublicPage({ data }: { data?: any[] }) {
  return <pre>{data && JSON.stringify(data, null, 2)}</pre>
}

export async function getStaticProps() {
  const supabase = createClient()

  const { data, error } = await supabase.from('countries').select()

  if (error || !data) {
    return { props: {} }
  }

  return { props: { data } }
}