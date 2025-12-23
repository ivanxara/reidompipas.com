import Wrapper from "@/components/layout/wrapper";
import MenuBox from "@/components/shared/menu-box";
import Heading1 from "@/components/ui/heading-1";
import Heading2 from "@/components/ui/heading-2";
import Footer from "@/components/layout/footer";
import { arr } from "@/utils/generic";
import { MENUS } from "@/utils/constants";
import { createClient } from "@/lib/supabase/server";


export default async function Page() {
  const supabase = await createClient();
  const [
    { data: menuData, error: menuError },
    { data: categories, error: categoriesError },
  ] = await Promise.all([
    supabase
      .from("newMenus")
      .select("*, products(*, categories(*), tags(*))")
      .eq("menuId", MENUS.MENU.ID)
      .eq("status", true)
      .order("order", { ascending: true }),
    supabase.from("categories").select().eq("status", true).order("order"),
  ]);

  if (menuError || categoriesError || !menuData || !categories) {
    console.log({ menuError });
    console.log({ categoriesError });
    return;
  }

  const products = menuData.flatMap((item) => item.products);

  const productsByCategory = arr.groupBy(products, "categories.name");

  const sortedProductsByCategory = categories.reduce((obj, category) => {
    const categoryName = category.name;
    if (productsByCategory[categoryName]) {
      obj[categoryName] = productsByCategory[categoryName];
    }
    return obj;
  }, {});

  return (
    <>
      <Wrapper className="flex flex-col">
        <Heading1>Carta</Heading1>
        <div className="flex flex-col gap-20 mt-10">
          {Object.entries(sortedProductsByCategory).map(
            ([category, products]: any) => (
              <div
                id={category}
                key={category}
                className="flex w-full flex-col"
              >
                <Heading2>{category}</Heading2>
                <div className="mt-6 grid w-full grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2">
                  {products.map((product: any, index: number) => (
                    <MenuBox key={index} product={product} />
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </Wrapper>
      <Footer className="!pb-32" />
    </>
  );
}
