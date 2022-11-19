import { useBlockConfig } from "../hooks/useBlockConfig";

export default async function regenerateStaticPage(req, res){
    const config = useBlockConfig()
    const { slug, secret } = req.query;

    try {
        if (secret !== config.wpSecret) {
            throw 'Page Revalidation - Invalid preview secret';
        }

        await res.revalidate(`/${slug}`).catch((err) => {
            throw `Page Revalidation - Can't revalidate slug '/${slug}'`;
        });

        return res.json({ page: `/${slug}`, revalidated: true });
    } catch (error) {
        console.error(new Error(error));
        return res.status(500).send({ error: error, slug: `/${slug}` });
    }
}