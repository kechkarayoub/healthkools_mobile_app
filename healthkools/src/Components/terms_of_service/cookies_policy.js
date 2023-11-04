import React from 'react';
import { COLORS } from "src/variables/colors";
import { line_return } from "src/utils";
import { render_term_service_link } from "src/Components/terms_of_service/utils";
import { StyleSheet, Text } from 'react-native';

export const get_cookies_policy_articles = (data, handleOpenUrl) => {
    return {
        intro: {
            ar: () => {
                return <>
                  <Text style={styles.paragraphContentStyle}>{`ملفات تعريف الارتباط عبارة عن أجزاء نصية صغيرة يتم استخدامها لتخزين المعلومات على متصفحات الويب. يتم استخدام ملفات تعريف الارتباط لتخزين المعرفات والمعلومات الأخرى واستلامها على أجهزة الكمبيوتر والهواتف المحمولة والأجهزة الأخرى. ويتم استخدام تقنيات أخرى، بما في ذلك البيانات التي نقوم بتخزينها على متصفح الويب أو الجهاز لديّك والمعرفات المرتبطة بجهازك وغير ذلك من البرامج، لأغراض مماثلة. في هذه السياسة، نشير إلى كل هذه التقنيات باسم "ملفات تعريف الارتباط".${line_return(1)}نستخدم ملفات تعريف الارتباط إذا كان لديك حساب على `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` أو كنت تستخدم منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` بما في ذلك موقعنا على الويب وتطبيقاتنا، أو عند زيارة مواقع الويب والتطبيقات الأخرى التي تستخدم منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`. تتيح ملفات تعريف الارتباط ل`}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` إمكانية توفير منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` لك والتعرف على المعلومات التي نتلقاها عنك، بما في ذلك المعلومات ذات الصلة باستخدامك لمواقع الويب والتطبيقات الأخرى، بصرف النظر عما إذا كنت قد قمت بالتسجيل أو تسجيل الدخول أم لا.${line_return(1)}توضّح هذه السياسة كيفية استخدامنا لملفات تعريف الارتباط والخيارات المتاحة لك. ما لم تنص هذه السياسة على خلاف ذلك، سيتم تطبيق سياسة البيانات على طريقة معالجتنا للبيانات التي نجمعها عبر ملفات تعريف الارتباط.`}</Text>
                </>
            },
            en: () => {
                return <>
                  <Text style={styles.paragraphContentStyle}>{`Cookies are small pieces of text used to store information on web browsers. Cookies are used to store and receive identifiers and other information on computers, phones and other devices. Other technologies, including data that we store on your web browser or device, identifiers associated with your device and other software, are used for similar purposes. In this policy, we refer to all of these technologies as « cookies ».${line_return(1)}We use cookies if you have a `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` account, use the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products, including our website and apps, or visit other websites and apps that use the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products. Cookies enable `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` to offer the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products to you and to understand the information that we receive about you, including information about your use of other websites and apps, whether or not you are registered or logged in.${line_return(1)}This policy explains how we use cookies and the choices you have. Except as otherwise stated in this policy, the Data Policy will apply to our processing of the data that we collect via cookies.`}</Text>
                </>
            },
            fr: () => {
                return <>
                  <Text style={styles.paragraphContentStyle}>{`Les cookies sont de petits éléments de texte qui servent à stocker des informations sur les navigateurs web. Les cookies sont notamment utilisés pour stocker et recevoir des identifiants et d'autres informations sur des appareils comme les ordinateurs ou les téléphones. D'autres technologies, dont les données que nous stockons sur votre navigateur web ou sur votre appareil, les identifiants associés à votre appareil et d'autres logiciels, sont utilisées dans des buts similaires. Dans la présente politique, nous désignons toutes ces technologies par le terme « cookies ».${line_return(1)}Nous utilisons des cookies si vous avez un compte `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`, si vous utilisez les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`, y compris notre site web et nos applications, ou si vous consultez d'autres sites web et applications qui ont recours aux produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`. Les cookies permettent à `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` de vous proposer les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` et de comprendre les informations reçues de votre part, notamment les informations concernant votre utilisation des autres sites web et applications, que vous soyez ou non inscrit ou connecté.${line_return(1)}La présente politique explique comment nous utilisons les cookies et présente les choix dont vous disposez à cet égard. Sauf indication contraire dans la présente politique, la Politique d'utilisation des données s'appliquera à nos traitements des données que nous recueillons au moyen des cookies.`}</Text>
                </>
            },
        },
        items: [
            {
                title: {
                    ar: () => <Text style={styles.articleTitleTextStyle}>{`لماذا نستخدم ملفات تعريف الارتباط؟`}</Text>,
                    en: () => <Text style={styles.articleTitleTextStyle}>{`Why do we use cookies?`}</Text>,
                    fr: () => <Text style={styles.articleTitleTextStyle}>{`Pourquoi utilisons-nous des cookies ?`}</Text>,
                },
                intro: {
                    ar: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`تساعدنا ملفات تعريف الارتباط على توفير منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` وحمايتها وتحسينها، على سبيل المثال، عن طريق إضفاء طابع شخصي على المحتوى وتخصيص الإعلانات وقياسها وتقديم تجربة أكثر أمانًا. تتضمن ملفات تعريف الارتباط التي نستخدمها ملفات تعريف ارتباط الجلسات، والتي يتم حذفها عند إغلاق المتصفح، وملفات تعريف الارتباط الدائمة، والتي تبقى على المتصفح حتى تنتهي صلاحيتها أو يتم حذفها. ونظرًا لتغير أسماء ملفات تعريف الارتباط التي نستخدمها من حين لآخر أثناء تحسين منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` التي نقدمها وتحديثها، نستخدم ملفات تعريف الارتباط للأغراض التالية:`}</Text>
                        </>
                    },
                    en: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`Cookies help us provide, protect and improve the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products, such as by personalising content, tailoring and measuring ads, and providing a safer experience. The cookies that we use include session cookies, which are deleted when you close your browser, and persistent cookies, which stay in your browser until they expire or you delete them. While the cookies that we use may change from time to time as we improve and update the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products, we use them for the following purposes:`}</Text>
                        </>
                    },
                    fr: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`Les cookies nous aident à proposer, à protéger et à améliorer les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` (par exemple en personnalisant le contenu), ainsi qu'à adapter et à mesurer les publicités, et à offrir une expérience plus sûre. Les cookies que nous utilisons comprennent des cookies de session, qui sont supprimés lorsque vous fermez votre navigateur, et des cookies permanents, qui restent sur votre navigateur jusqu'à ce qu'ils expirent ou que vous les supprimiez. Bien que les cookies que nous utilisons puissent changer au fil des améliorations et des mises à jour des produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`, nous les utilisons aux fins suivantes :`}</Text>
                        </>
                    },
                },
                paragraphs: [
                    {
                        ar: () => <Text style={styles.paragraphTitleContentStyle}>{`المصادقة`}</Text>,
                        en: () => <Text style={styles.paragraphTitleContentStyle}>{`Authentication`}</Text>,
                        fr: () => <Text style={styles.paragraphTitleContentStyle}>{`Authentification`}</Text>,
                        list_items: [
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`نستخدم ملفات تعريف الارتباط للتحقق من حسابك وتحديد وقت تسجيل دخولك، و ذلك حتى نتمكن من جعل عملية وصولك إلى منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` أكثر سهولة بالإضافة إلى منحك الميزات وتجربة الاستخدام المناسبة.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`We use cookies to verify your account and determine when you're logged in so that we can make it easier for you to access the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products and show you the appropriate experience and features.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Nous utilisons des cookies pour vérifier votre compte et pour déterminer les moments où vous êtes connecté, de façon à faciliter votre accès aux produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` et à vous proposer une expérience et des fonctionnalités adaptées à votre utilisation.`}</Text>
                                    </>
                                },
                            },
                        ],
                    },
                    {
                        ar: () => <Text style={styles.paragraphTitleContentStyle}>{`الأمان والموقع وسلامة المنتج`}</Text>,
                        en: () => <Text style={styles.paragraphTitleContentStyle}>{`Security, site and product integrity`}</Text>,
                        fr: () => <Text style={styles.paragraphTitleContentStyle}>{`Sécurité du site et intégrité des produits`}</Text>,
                        list_items: [
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`نستخدم ملفات تعريف الارتباط للمساعدة في الحفاظ على أمان الحساب والبيانات ومنتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` وسلامتها.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`We use cookies to help us keep your account, data and the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products safe and secure.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Nous utilisons des cookies pour garantir la sécurité de votre compte, de vos données et des produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`.`}</Text>
                                    </>
                                },
                            },
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`نستخدم أيضًا ملفات تعريف الارتباط لمواجهة الأنشطة التي تمثل انتهاكًا لسياساتنا أو التي تحد من قدرتنا على تقديم منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` بكفاءة.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`We also use cookies to combat activity that violates our policies or otherwise degrades our ability to provide the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Les cookies nous permettent également de lutter contre les activités qui enfreignent nos politiques ou qui dégradent notre capacité à fournir les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`.`}</Text>
                                    </>
                                },
                            },
                        ],
                    },
                    {
                        ar: () => <Text style={styles.paragraphTitleContentStyle}>{`الإعلان والتوصيات والرؤى والقياس`}</Text>,
                        en: () => <Text style={styles.paragraphTitleContentStyle}>{`Advertising, recommendations, insights and measurement`}</Text>,
                        fr: () => <Text style={styles.paragraphTitleContentStyle}>{`Publicités, recommandations, statistiques et mesures`}</Text>,
                        list_items: [
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`نستخدم ملفات تعريف الارتباط لتساعدنا على عرض إعلانات الأنشطة التجارية وغيرها من المؤسسات وعرض توصيات خاصة بها أمام الأشخاص الذين يُحتمل اهتمامهم بالمنتجات أو الخدمات أو القضايا التي يروجون لها.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`We use cookies to help us show ads and to make recommendations for businesses and other organisations to people who may be interested in the products, services or causes they promote.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Nous utilisons des cookies afin de proposer des publicités et de faire des recommandations pour des entreprises et d'autres organisations à des gens qui pourraient être intéressés par leurs produits, leurs services ou les causes qu'elles soutiennent.`}</Text>
                                    </>
                                },
                            },
                        ],
                    },
                    {
                        ar: () => <Text style={styles.paragraphTitleContentStyle}>{`ميزات وخدمات الموقع`}</Text>,
                        en: () => <Text style={styles.paragraphTitleContentStyle}>{`Site features and services`}</Text>,
                        fr: () => <Text style={styles.paragraphTitleContentStyle}>{`Fonctionnalités et services du site`}</Text>,
                        list_items: [
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`نستخدم ملفات تعريف الارتباط لتمكين الوظيفة التي تساعدنا على تقديم منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`We use cookies to enable the functionality that helps us provide the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Nous utilisons des cookies pour mettre en place des fonctionnalités qui nous aident à proposer les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`.`}</Text>
                                    </>
                                },
                            },
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`كما نستخدم ملفات تعريف الارتباط أيضًا للمساعدة في تزويدك بالمحتوى الذي يتناسب مع لغتك وإعداداتك المحلية.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`We also use cookies to help provide you with content relevant to your locale.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Nous utilisons également des cookies pour vous proposer un contenu qui correspond à votre région.`}</Text>
                                    </>
                                },
                            },
                        ],
                    },
                    {
                        ar: () => <Text style={styles.paragraphTitleContentStyle}>{`الأداء`}</Text>,
                        en: () => <Text style={styles.paragraphTitleContentStyle}>{`Performance`}</Text>,
                        fr: () => <Text style={styles.paragraphTitleContentStyle}>{`Performance`}</Text>,
                        list_items: [
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`نستخدم ملفات تعريف الارتباط لتوفير أفضل تجربة استخدام ممكنة.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`We use cookies to provide you with the best experience possible.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Les cookies nous servent à rendre votre utilisation du site aussi agréable que possible.`}</Text>
                                    </>
                                },
                            },
                        ],
                    },
                    {
                        ar: () => <Text style={styles.paragraphTitleContentStyle}>{`التحليلات والبحث`}</Text>,
                        en: () => <Text style={styles.paragraphTitleContentStyle}>{`Analytics and research`}</Text>,
                        fr: () => <Text style={styles.paragraphTitleContentStyle}>{`Analyse et recherche`}</Text>,
                        list_items: [
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`نستخدم ملفات تعريف الارتباط من أجل فهم طبيعة استخدام الأشخاص لمنتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` حتى نتمكن من تحسينها لهم.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`We use cookies to better understand how people use the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products so that we can improve them.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Nous utilisons des cookies pour mieux comprendre comment les gens se servent des produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`, afin de pouvoir les améliorer.`}</Text>
                                    </>
                                },
                            },
                        ],
                    },
                    {
                        ar: () => <Text style={styles.paragraphTitleContentStyle}>{`مواقع الويب والتطبيقات الخارجية`}</Text>,
                        en: () => <Text style={styles.paragraphTitleContentStyle}>{`Third-party websites and apps`}</Text>,
                        fr: () => <Text style={styles.paragraphTitleContentStyle}>{`Sites web et applications externes`}</Text>,
                        list_items: [
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`قد يختار شركاء الأعمال التابعين لنا أيضًا مشاركة المعلومات مع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` من ملفات تعريف الارتباط التي تم تعيينها في نطاقات مواقع الويب الخاصة بهم، سواء كان لديك حساب على `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` أم لا أو سجلت دخولك أم لا. وعلى وجه التحديد، قد يتم تعيين ملفات تعريف الارتباط التي تحمل اسم _hkc على نطاق شريك أعمال `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` الذي تزور موقعه. وعلى عكس ملفات تعريف الارتباط التي يتم تعيينها على النطاقات الخاصة ب`}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`، لا يمكن الوصول إلى ملفات تعريف الارتباط هذه بواسطة `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` عندما تزور موقعًا آخر غير الموقع الذي تم تعيين ملفات تعريف الارتباط عليه، بما في ذلك عندما تكون على أحد نطاقاتنا. وتخدم نفس أغراض ملفات تعريف الارتباط التي يتم تعيينها في النطاق الخاص ب`}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`، والتي تهدف إلى إضفاء طابع شخصي على المحتوى (بما في ذلك الإعلانات)، وقياس أدائها، وتوفير التحليلات، وتجربة أكثر أمانًا، كما هو موضح في سياسة ملفات تعريف الارتباط هذه.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Our business partners may also choose to share information with `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` from cookies set in their own websites domains, whether or not you have a `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` account or are logged in. Specifically, cookies named _hkc may be set on the domain of the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` business partner whose site you're visiting. Unlike cookies that are set on `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`'s own domains, these cookies aren't accessible by `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` when you're on a site other than the one on which they were set, including when you are on one of our domains. They serve the same purposes as cookies set in `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`'s own domain, which are to personalise content (including ads), measure ads, produce analytics and provide a safer experience, as set out in this Cookies Policy.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Nos partenaires commerciaux peuvent également choisir de partager leurs informations avec `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` à l'aide de cookies placés sur les domaines de leurs propres sites web, que vous ayez ou non un compte `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` ou que vous soyez connecté(e) ou non. Plus précisément, des cookies nommés _hkc peuvent être placés sur le domaine du partenaire commercial de `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` dont vous consultez le site. Contrairement aux cookies installés sur les domaines appartenant à `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`, `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` ne peut pas accéder à ces cookies lorsque vous êtes sur un autre site que celui sur lequel ils sont installés, y compris lorsque vous vous trouvez sur l'un de nos domaines. Ils ont les mêmes fonctions que les cookies placés sur les domaines de `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`, c'est-à-dire de personnaliser le contenu (y compris les publicités), d'adapter et de mesurer les publicités, de produire des données d'analyse et de proposer une expérience plus sécurisée, comme indiqué en détail dans cette Politique d'utilisation des cookies.`}</Text>
                                    </>
                                },
                            },
                        ],
                    },
                ]
            },
            {
                title: {
                    ar: () => <Text style={styles.articleTitleTextStyle}>{`أين نستخدم ملفات تعريف الارتباط؟`}</Text>,
                    en: () => <Text style={styles.articleTitleTextStyle}>{`Where do we use cookies?`}</Text>,
                    fr: () => <Text style={styles.articleTitleTextStyle}>{`Quand utilisons-nous des cookies ?`}</Text>,
                },
                intro: {
                    ar: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`يجوز لنا وضع ملفات تعريف الارتباط على جهاز الكمبيوتر أو أي جهاز آخر تستخدمه واستلام المعلومات التي يتم تخزينها داخل تلك الملفات، وذلك عند استخدام أو زيارة:`}</Text>
                        </>
                    },
                    en: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`We may place cookies on your computer or device and receive information stored in cookies when you use or visit:`}</Text>
                        </>
                    },
                    fr: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`Nous pouvons placer des cookies sur votre ordinateur ou votre appareil et recevoir les informations stockées dans des cookies lorsque vous utilisez ou consultez :`}</Text>
                        </>
                    },
                },
                paragraphs: [
                    {
                        ar: () => {
                            return <>
                              <Text style={styles.paragraphContentStyle}>{`منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`؛`}</Text>
                            </>
                        },
                        en: () => {
                            return <>
                              <Text style={styles.paragraphContentStyle}>{`The `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products;`}</Text>
                            </>
                        },
                        fr: () => {
                            return <>
                              <Text style={styles.paragraphContentStyle}>{`Les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` ;`}</Text>
                            </>
                        },
                    },
                    {
                        ar: () => {
                            return <>
                              <Text style={styles.paragraphContentStyle}>{`مواقع الويب والتطبيقات التي توفرها الشركات الأخرى التي تستخدم منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`. تستخدم `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` ملفات تعريف الارتباط وتتلقى المعلومات عند زيارتك لمواقع الويب والتطبيقات هذه، بما في ذلك معلومات الجهاز والمعلومات ذات الصلة بنشاطك، دون مطالبتك باتخاذ أي إجراء. ويتم ذلك كله بصرف النظر عما إذا كان لديك حساب على `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` أم لا، أو كنت قد قمت بتسجيل الدخول إلى `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` أم لا.`}</Text>
                            </>
                        },
                        en: () => {
                            return <>
                              <Text style={styles.paragraphContentStyle}>{`Websites and apps provided by other companies that use the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products. `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` uses cookies and receives information when you visit those sites and apps, including device information and information about your activity, without any further action from you. This occurs whether or not you have a `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` account or are logged in.`}</Text>
                            </>
                        },
                        fr: () => {
                            return <>
                              <Text style={styles.paragraphContentStyle}>{`Des sites web et des applications proposés par d'autres entreprises qui utilisent les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`. `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` utilise des cookies et reçoit des informations lorsque vous consultez ces sites et ces applications, notamment des informations sur les appareils et des informations à propos de votre activité, sans autre action de votre part. Cela se produit que vous ayez ou non un compte `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` et que vous soyez ou non connecté.`}</Text>
                            </>
                        },
                    },
                ]
            },
            {
                title: {
                    ar: () => <Text style={styles.articleTitleTextStyle}>{`هل تستخدم الشركات الأخرى ملفات تعريف الارتباط فيما يتعلق بمنتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`؟`}</Text>,
                    en: () => <Text style={styles.articleTitleTextStyle}>{`Do other companies use cookies in connection with the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products?`}</Text>,
                    fr: () => <Text style={styles.articleTitleTextStyle}>{`D'autres entreprises utilisent-elles des cookies en lien avec les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` ?`}</Text>,
                },
                intro: {
                    ar: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`نعم، تستخدم الشركات الأخرى ملفات تعريف الارتباط على منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` لتقديم خدمات الإعلانات والقياس والتسويق والتحليلات إلينا، ولتوفير ميزات معينة وتحسين خدماتنا من أجلك.${line_return(1)}تستخدم الشركات الخارجية أيضًا ملفات تعريف الارتباط في مواقعها على الويب وتطبيقاتها فيما يتعلق بمنتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`. لفهم كيفية استخدام الشركات الأخرى لملفات تعريف الارتباط، يرجى مراجعة سياسات الخصوصية لكل منها.`}</Text>
                        </>
                    },
                    en: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`Yes, other companies use cookies on the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products to provide advertising, measurement, marketing and analytics services to us, and to provide certain features and improve our services for you.${line_return(1)}Third-party companies also use cookies on their own sites and apps in connection with the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products. To understand how other companies use cookies, please review their policies.`}</Text>
                        </>
                    },
                    fr: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`Oui, d'autres entreprises utilisent des cookies sur les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` pour nous fournir des services de publicité, de mesure, de marketing et d'analyse, ainsi que pour fournir certaines fonctionnalités et améliorer nos services pour vous.${line_return(1)}Des entreprises tierces peuvent également utiliser des cookies sur leurs propres sites et applications en lien avec les produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`. Pour comprendre comment ces entreprises utilisent les cookies, veuillez consulter leurs politiques.`}</Text>
                        </>
                    },
                },
                paragraphs: [

                ],
            },
            {
                title: {
                    ar: () => <Text style={styles.articleTitleTextStyle}>{`كيف يمكنك التحكم في معلوماتك؟`}</Text>,
                    en: () => <Text style={styles.articleTitleTextStyle}>{`How can you control your information?`}</Text>,
                    fr: () => <Text style={styles.articleTitleTextStyle}>{`Comment pouvez-vous contrôler vos informations ?`}</Text>,
                },
                intro: {
                    ar: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`نستخدم ملفات تعريف الارتباط لإضفاء طابع شخصي على المحتوى والخدمات وتحسينها، وتوفير تجربة أكثر أمنًا وعرض إعلانات مفيدة وملائمة لك داخل `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` وخارجه. يمكنك التحكم في طريقة استخدامنا للبيانات لعرض الإعلانات عليك وغير ذلك باستخدام الأدوات الموضّحة أدناه.`}</Text>
                        </>
                    },
                    en: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`We use cookies to help personalise and improve content and services, provide a safer experience and to show you useful and relevant ads on and off `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`. You can control how we use data to show you ads and more by using the tools described below.`}</Text>
                        </>
                    },
                    fr: () => {
                        return <>
                          <Text style={styles.paragraphContentStyle}>{`Nous utilisons des cookies pour vous aider à personnaliser et améliorer le contenu et les services, fournir une expérience plus sécurisée et vous montrer des publicités utiles et pertinentes sur `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` et en dehors. Vous pouvez contrôler la manière dont nous exploitons les données pour vous proposer des publicités et plus, grâce aux outils décrits ci-dessous.`}</Text>
                        </>
                    },
                },
                paragraphs: [
                    {
                        ar: () => <Text style={styles.paragraphTitleContentStyle}>{`عناصر التحكم في ملفات تعريف الارتباط للمتصفح:`}</Text>,
                        en: () => <Text style={styles.paragraphTitleContentStyle}>{`Browser cookie controls:`}</Text>,
                        fr: () => <Text style={styles.paragraphTitleContentStyle}>{`Contrôle des cookies de navigateur :`}</Text>,
                        list_items: [
                            {
                                ar: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`قد يوفر المتصفح أو الجهاز مجموعة من الإعدادات التي يمكنك من خلالها اختيار تعيين ملفات تعريف الارتباط للمتصفح أو حذفها. تتنوع عناصر التحكم حسب المتصفح، وقد تقوم الجهات المصنّعة بتغيير الإعدادات التي يوفرونها وكيفية عمل تلك الإعدادات في أي وقت. يمكنك العثور على معلومات إضافية عن عناصر التحكم التي توفرها المتصفحات الشهيرة في روابطها. قد لا تعمل بعض أجزاء منتجات `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` بشكل صحيح في حالة تعطيل استخدام ملفات تعريف الارتباط بالمتصفح. يرجى العلم بأن عناصر التحكم تلك تختلف عن عناصر التحكم التي يوفرها `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` لك.`}</Text>
                                    </>
                                },
                                en: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`Your browser or device may offer settings that allow you to choose whether browser cookies are set and to delete them. These controls vary by browser, and manufacturers may change both the settings that they make available and how they work at any time. You may find additional information about the controls offered by popular browsers at it's links. Certain parts of the `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` products may not work properly if you have disabled browser cookie use. Please be aware that these controls are distinct from the controls that `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` offers you.`}</Text>
                                    </>
                                },
                                fr: () => {
                                    return <>
                                      <Text style={styles.paragraphContentStyle}>{`De plus, votre navigateur ou votre appareil propose peut-être des paramètres vous permettant de choisir si les cookies du navigateur sont activés et de les supprimer. Ces contrôles varient en fonction du navigateur et les fabricants peuvent modifier les paramètres disponibles et le fonctionnement de ceux-ci à tout moment. Vous pouvez trouver des informations supplémentaires sur les contrôles proposés par les navigateurs les plus populaires en consultant leurs liens. Certaines parties des produits `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` peuvent ne pas fonctionner correctement si vous avez désactivé l'utilisation des cookies dans votre navigateur. Soyez conscient que ces contrôles sont distincts de ceux que `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` vous propose.`}</Text>
                                    </>
                                },
                            },
                        ],
                    },
                ]
            },
        ]
    };
};

const styles = StyleSheet.create({
  articleTitleTextStyle: {
    color: COLORS.default_color,
    fontSize: 15,
    fontWeight: "bold",
  },
  boldBlackStyle: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,
  },
  customItemStyle: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,
  },
  linkStyle: {
    color: "#0d6efd",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 5,
    marginRight: 5,
  },
  paragraphContentCustomStyle: {
    marginBottom: 5,
    marginTop: 10,
  },
  paragraphContentStyle: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    textAlign: 'justify',
  },
  paragraphTitleContentStyle: {
    color: COLORS.secondary_color,
    fontSize: 13,
    fontWeight: "bold",
  },
  registrationLabelStyle: {
    color: "#777",
    marginLeft: 5,
    marginRight: 5,
    fontSize: 15,
    fontWeight: "bold",
  },
  subTitleTextStyle: {
    color: COLORS.black_color,
    fontSize: 13,
    fontWeight: "bold",
  },
  termStyle: {
    color: "#004eff",
    marginLeft: 5,
    marginRight: 5,
  },
});
