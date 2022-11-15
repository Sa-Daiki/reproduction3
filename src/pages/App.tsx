import { H1, H2 } from "@/components/atoms/heading";
import { DtAndDd } from "@/components/molecules/description";
import { IMAGEPATH, LISTCONTENTS } from "@/constants";

const App = () => (
  <div id="container" className="my-0 mx-auto max-w-[1000px]">
    <header className="mt-[60px] px-[10px] lg:px-0">
      <H1>
        <a className="leading-none">PHOTO BOOK2</a>
      </H1>
    </header>

    <main>
      <div className="max-w-[1000px] mb-[60px]">
        <img src="/mainvisual.jpg" />
      </div>

      <div key="inner" className="max-w-[800px] my-0 mx-auto">
        <section className="section">
          <H2>INDEX</H2>
          <div className="border border-black">
            <ol className="p-[30px] list-decimal mx-auto table">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <li
                    key={i}
                    className={`text-[.9rem] text-left ${
                      4 !== i ? "mb-[20px]" : "mb-0"
                    }`}
                  >
                    タイトルタイトルタイトルタイトルタイトルタイトルタイトル
                  </li>
                ))}
            </ol>
          </div>
        </section>

        <ul className="flex flex-wrap flex-col justify-between mb-[60px] mx-[20px] lg:flex-row md:mx-0">
          {IMAGEPATH.map((imgPath) => (
            <li
              key={imgPath}
              className="text-center mb-[15px] mx-auto lg:w-[49%]"
            >
              <img src={imgPath} className="align-bottom border-none" />
            </li>
          ))}
        </ul>

        <section className="section">
          <H2>DETAIL</H2>
          <div className="flex flex-col lg:flex-row">
            <dl className="border-b border-black pr-[40px] pb-[30px] text-left w-[100%] lg:border-b-0 lg:border-r lg:w-[35%] lg:pb-0">
              {LISTCONTENTS.map(({ table, description }) => (
                <DtAndDd
                  tableChild={table}
                  descriptionChild={description}
                  key={table}
                />
              ))}
            </dl>
            <div className="pt-[40px] pl-0 text-left w-[100%] lg:pl-[40px] lg:pt-0 lg:w-[65%]">
              <p className="mb-[20px] text-[.875rem]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <p className="mb-[20px] text-[.875rem]">
                テキストテキストテキストテキストテキストテキストテキストテキストテキスト
              </p>
              <a className="text-[.875rem] underline text-black" href="">
                オンラインストアで見る
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer className="py-[15px]">
      <p className="text-[.625rem] text-center">&copy; PHOTO BOOK 2</p>
    </footer>
  </div>
);

export default App;
