import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import {COLORS} from "src/variables/colors";
import {render_term_service_link, render_term_service_custom_item} from "src/Components/terms_of_service/utils";

export const get_terms_of_services_articles = (data, handleOpenUrl) => {
    return [
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"الموضوع"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Object"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Objet"}</Text>,
            },
            paragraphs: [
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{"   الغرض من 'شروط الاستخدام العامة' هذه هو توفير إطار قانوني لاستخدام موقع "}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{" وخدماته. "}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{"   The purpose of these 'general conditions of use' is to provide a legal framework for the use of the site "}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{" and its services."}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{"  Les présentes 'conditions générales d'utilisation' ont pour objet l'encadrement juridique de l'utilisation du site "}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{" et de ses services."}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  يُبرم هذا العقد بين:`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  This contract is concluded between:`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  Ce contrat est conclu entre :`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`مدير الموقع ، المشار إليه فيما يلي باسم "الناشر" ،`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The manager of the website, hereinafter referred to as "the Publisher",`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Le gérant du site internet, ci-après désigné « l'Éditeur »,`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`أي شخص طبيعي أو اعتباري يرغب في الوصول إلى الموقع وخدماته ، المشار إليه فيما بعد باسم "المستخدم".`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Any natural or legal person wishing to access the site and its services, hereinafter referred to as "the User".`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelé « l'Utilisateur ».`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`يجب قبول الشروط العامة للاستخدام من قبل أي مستخدم ، ويشكل الوصول إلى الموقع قبولًا لهذه الشروط.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The general conditions of use must be accepted by any User, and access to the site constitutes acceptance of these conditions.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Les conditions générales d'utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.`}</Text>
                      </>
                    },
                },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"إشعار قانوني"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Legal Notice"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Mentions légales"}</Text>,
            },
            paragraphs: [
                {
                    ar: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`للأشخاص الاعتباريين:`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`For legal persons:`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`Pour les personnes morales :`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  يتم نشر موقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` من قبل شركة `}{render_term_service_custom_item(data.company_legal_status || "company_legal_status", styles.boldBlackStyle)}{` ، `}{render_term_service_custom_item(data.company_name || "company_name", styles.boldBlackStyle)}{`  برأس مال قدره `}{render_term_service_custom_item(data.company_capital || "company_capital", styles.boldBlackStyle)}{` د.م ، التي يقع مكتبها الرئيسي في `}{render_term_service_custom_item(data.company_address || "company_address", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` The site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` is published by the company `}{render_term_service_custom_item(data.company_name || "company_name", styles.boldBlackStyle)}{`, `}{render_term_service_custom_item(data.company_legal_status || "company_legal_status", styles.boldBlackStyle)}{` with a capital of `}{render_term_service_custom_item(data.company_capital || "company_capital", styles.boldBlackStyle)}{` MAD, whose head office is located at `}{render_term_service_custom_item(data.company_address || "company_address", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` Le site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` est édité par la société `}{render_term_service_custom_item(data.company_name || "company_name", styles.boldBlackStyle)}{`, `}{render_term_service_custom_item(data.company_legal_status || "company_legal_status", styles.boldBlackStyle)}{` au capital de `}{render_term_service_custom_item(data.company_capital || "company_capital", styles.boldBlackStyle)}{` MAD, dont le siège social est situé au `}{render_term_service_custom_item(data.company_address || "company_address", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`ويمثل الشركة `}{render_term_service_custom_item(data.responsable_full_name || "responsable_full_name", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The company is represented by `}{render_term_service_custom_item(data.responsable_full_name || "responsable_full_name", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`La société est représentée par `}{render_term_service_custom_item(data.responsable_full_name || "responsable_full_name", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`للأفراد:`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`For individuals:`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={[styles.paragraphContentStyle, styles.paragraphContentCustomStyle]}>{`Pour les personnes physiques :`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  يتم تحرير موقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` بواسطة `}{render_term_service_custom_item(data.responsable_full_name || "responsable_full_name", styles.boldBlackStyle)}{`، ومقره في `}{render_term_service_custom_item(data.responsable_address || "responsable_address", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  The `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` site is edited by `}{render_term_service_custom_item(data.responsable_full_name || "responsable_full_name", styles.boldBlackStyle)}{`, domiciled at `}{render_term_service_custom_item(data.responsable_address || "responsable_address", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  Le site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` est édité par `}{render_term_service_custom_item(data.responsable_full_name || "responsable_full_name", styles.boldBlackStyle)}{`, domicilié au `}{render_term_service_custom_item(data.responsable_address || "responsable_address", styles.boldBlackStyle)}{`.`}</Text>
                      </>
                    },
                },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"الوصول إلى الخدمات"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Access to services"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Accès aux services"}</Text>,
            },
            paragraphs: [
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  مستخدم الموقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` لديه حق الوصول إلى الخدمات التالية:`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` The User of the site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` has access to the following services:`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` L'Utilisateur du site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` a accès aux services suivants :`}</Text>
                      </>
                    },
                    list_items: [
                      // {
                      //   ar: () => {
                      //     return <>
                      //       <Text style={styles.paragraphContentStyle}>{` الوصول إلى الأخبار الصحية عبر بروتوكول RSS.`}</Text>
                      //     </>
                      //   },
                      //   en: () => {
                      //     return <>
                      //       <Text style={styles.paragraphContentStyle}>{` Access to health news via rss protocol.`}</Text>
                      //     </>
                      //   },
                      //   fr: () => {
                      //     return <>
                      //       <Text style={styles.paragraphContentStyle}>{` Accès aux actualités santé via protocole rss.`}</Text>
                      //     </>
                      //   },
                      // },
                      {
                        ar: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{` إمكانية إنشاء حساب.`}</Text>
                          </>
                        },
                        en: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{` Possibility to create an account.`}</Text>
                          </>
                        },
                        fr: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{` Possibilité de créer un compte.`}</Text>
                          </>
                        },
                      },
                      {
                        ar: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`  يمكن للمستخدم الوصول إلى محتوى الموقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`بثلاث لغات: العربية ،الإنجليزية والفرنسية.`}</Text>
                          </>
                        },
                        en: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{` The User can access the content of the site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`  in three languages: Arabic, English and French.`}</Text>
                          </>
                        },
                        fr: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{` L'Utilisateur peut accéder au contenu du site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` en trois langues : Arabe, Anglais et Français.`}</Text>
                          </>
                        },
                      },
                      {
                        ar: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`...`}</Text>
                          </>
                        },
                        en: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`...`}</Text>
                          </>
                        },
                        fr: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`...`}</Text>
                          </>
                        },
                      },
                    ],
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`يمكن لأي مستخدم لديه اتصال بالإنترنت الوصول إلى الموقع مجانًا ومن أي مكان. التكاليف التي يتكبدها المستخدم للوصول إليه (اتصال الإنترنت ، أجهزة الكمبيوتر ، إلخ) ليست من مسؤولية الناشر.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Any User with internet access can access the site for free and from anywhere. The costs incurred by the User to access it (internet connection, computer equipment, etc.) are not the responsibility of the Publisher.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Tout Utilisateur ayant accès a internet peut accéder gratuitement et depuis n'importe où au site. Les frais supportés par l'Utilisateur pour y accéder (connexion internet, matériel informatique, etc.) ne sont pas à la charge de l'Éditeur.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`لا يمكن للمستخدم الوصول إلى الخدمات التالية ما لم يكن عضوًا في الموقع (أي يتم تحديد هويته باستخدام تفاصيل تسجيل الدخول الخاصة به):`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The following services are not accessible to the User unless he is a member of the site (i.e. he is identified using his login details):`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Les services suivants ne sont pas accessible pour l'Utilisateur que s'il est membre du site (c'est-à-dire qu'il est identifié à l'aide de ses identifiants de connexion) :`}</Text>
                      </>
                    },
                    list_items: [
                      {
                        ar: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`تسجيل الدخول إلى حسابه الخاص`}</Text>
                          </>
                        },
                        en: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`Log in to his own account`}</Text>
                          </>
                        },
                        fr: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`Se connecter à son propre compte`}</Text>
                          </>
                        },
                      },
                      {
                        ar: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`تسجيل الخروج من حسابه الخاص`}</Text>
                          </>
                        },
                        en: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`Log out from his own account`}</Text>
                          </>
                        },
                        fr: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`Se déconnecter de son propre compte`}</Text>
                          </>
                        },
                      },
                      {
                        ar: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`...`}</Text>
                          </>
                        },
                        en: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`...`}</Text>
                          </>
                        },
                        fr: () => {
                          return <>
                            <Text style={styles.paragraphContentStyle}>{`...`}</Text>
                          </>
                        },
                      },
                    ],
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`قد يتم ايقاف الموقع وخدماته المختلفة أو تعليقها من قبل الناشر ، ولا سيما أثناء الصيانة ، دون إشعار أو مبرر.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The site and its various services may be interrupted or suspended by the Publisher, in particular during maintenance, without notice or justification.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Le site et ses différents services peuvent être interrompus ou suspendus par l'Éditeur, notamment à l'occasion d'une maintenance, sans obligation de préavis ou de justification.`}</Text>
                      </>
                    },
                },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"مسؤولية المستخدم"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Responsibility of the User"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Responsabilité de l'Utilisateur"}</Text>,
            },
            paragraphs: [
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`المستخدم مسؤول عن المخاطر المرتبطة باستخدام معرف تسجيل الدخول وكلمة المرور الخاصة به.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`The User is responsible for the risks associated with the use of his login identifier and password.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`L'Utilisateur est responsable des risques liés à l'utilisation de son identifiant de connexion et de son mot de passe.`}</Text>
                    </>
                  },
              },
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`يجب أن تظل كلمة مرور المستخدم سرية. في حالة الكشف عن كلمة المرور ، يرفض الناشر كل المسؤولية.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`The User's password must remain secret. In the event of password disclosure, the Publisher declines all responsibility.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`Le mot de passe de l'Utilisateur doit rester secret. En cas de divulgation de mot de passe, l'Éditeur décline toute responsabilité.`}</Text>
                    </>
                  },
              },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  يتحمل المستخدم المسؤولية الكاملة عن استخدامه للمعلومات والمحتوى الموجود على الموقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` The User assumes full responsibility for the use he makes of the information and content on the site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` L'Utilisateur assume l'entière responsabilité de l'utilisation qu'il fait des informations et contenus présents sur le site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`أي استخدام للخدمة من قبل المستخدم يؤدي بشكل مباشر أو غير مباشر إلى الضرر يجب أن يتم تعويضه لصالح الموقع.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Any use of the service by the User directly or indirectly resulting in damage must be compensated for the benefit of the site.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Tout usage du service par l'Utilisateur ayant directement ou indirectement pour conséquence des dommages doit faire l'objet d'une indemnisation au profit du site.`}</Text>
                      </>
                    },
                },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"مسؤولية الناشر"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Responsibility of the Publisher"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Responsabilité de l'Éditeur"}</Text>,
            },
            paragraphs: [
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`لا يمكن لأي عطل في الخادم أو الشبكة تحميل مسؤولية الناشر.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`Any malfunction of the server or the network cannot engage the responsibility of the Publisher.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`Tout dysfonctionnement du serveur ou du réseau ne peut engager la responsabilité de l'Éditeur.`}</Text>
                    </>
                  },
              },
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`وبالمثل ، لا يمكن تحميل الموقع المسؤولية في حالة القوة القاهرة أو الحقيقة غير المتوقعة والتي لا يمكن التغلب عليها لطرف ثالث.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`Likewise, the site cannot be held liable in the event of force majeure or the unforeseeable and insurmountable fact of a third party.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`De même, la responsabilité du site ne peut être engagée en cas de force majeure ou du fait imprévisible et insurmontable d'un tiers.`}</Text>
                    </>
                  },
              },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  يتعهد الموقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` بتنفيذ جميع الوسائل اللازمة لضمان أمن وسرية البيانات. ومع ذلك ، فإنه لا يوفر ضمانًا للأمان الكامل.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` The site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` undertakes to implement all necessary means to guarantee the security and confidentiality of data. However, it does not provide a guarantee of total security.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` Le site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` s'engage à mettre en œuvre tous les moyens nécessaires pour garantir la sécurité et la confidentialité des données. Toutefois, il n'apporte pas une garantie de sécurité totale.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`يحتفظ الناشر بالحق في عدم ضمان موثوقية المصادر ، على الرغم من أن المعلومات المنشورة على الموقع تعتبر موثوقة.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The Publisher reserves the right to not guarantee the reliability of the sources, although the information disseminated on the site is deemed reliable.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`L'Éditeur se réserve la faculté d'une non-garantie de la fiabilité des sources, bien que les informations diffusées su le site soient réputées fiables.`}</Text>
                      </>
                    },
                },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"الملكية الفكرية"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Intellectual property"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Propriété intellectuelle"}</Text>,
            },
            paragraphs: [
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`  محتويات الموقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` (الشعارات والنصوص والرسومات ومقاطع الفيديو وما إلى ذلك) محمية بموجب حقوق النشر بموجب قانون الملكية الفكرية.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` The contents of the site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` (logos, texts, graphics, videos, etc.) are protected by copyright, under the Intellectual Property Code.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{` Les contenus du site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` (logos, textes, éléments graphiques, vidéos, etc.) son protégés par le droit d'auteur, en vertu du Code de la propriété intellectuelle.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`يجب على المستخدم الحصول على إذن من ناشر الموقع قبل أي إعادة إنتاج أو نسخ أو نشر لهذه المحتويات المختلفة.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The User must obtain the authorization of the site editor before any reproduction, copy or publication of these various contents.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`L'Utilisateur devra obtenir l'autorisation de l'éditeur du site avant toute reproduction, copie ou publication de ces différents contenus.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`يمكن استخدامها من قبل المستخدمين لأغراض خاصة ؛ يحظر جميع الاستخدامات التجارية.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`These can be used by users for private purposes; all commercial use is prohibited.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`Ces derniers peuvent être utilisés par les utilisateurs à des fins privées ; tout usage commercial est interdit.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`يتحمل المستخدم المسؤولية الكاملة عن أي محتوى يضعه على الإنترنت ويتعهد بعدم إلحاق الضرر بأي طرف ثالث.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The User is entirely responsible for any content that he puts online and he undertakes not to harm a third party.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`L'Utilisateur est entièrement responsable de tout contenu qu'il met en ligne et il s'engage à ne pas porter atteinte à un tiers.`}</Text>
                      </>
                    },
                },
                {
                    ar: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`يحتفظ محرر الموقع بالحق في تعديل أو حذف المحتوى الذي ينشره المستخدمون بحرية في أي وقت ، دون مبرر.`}</Text>
                      </>
                    },
                    en: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`The Site Editor reserves the right to freely moderate or delete the content posted by users at any time, without justification.`}</Text>
                      </>
                    },
                    fr: () => {
                      return <>
                        <Text style={styles.paragraphContentStyle}>{`L'Éditeur du site se réserve le droit de modérer ou de supprimer librement et à tout moment les contenus mis en ligne par les utilisateurs, et ce sans justification.`}</Text>
                      </>
                    },
                },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"البيانات الشخصية"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Personal data"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Données personnelles"}</Text>,
            },
            paragraphs: [
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`يجب على المستخدم تقديم معلومات شخصية من أجل التسجيل في الموقع.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`The User must provide personal information in order to register on the site.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`L'Utilisateur doit obligatoirement fournir des informations personnelles pour procéder à son inscription sur le site.`}</Text>
                    </>
                  },
              },
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  قد يتم استخدام العنوان الإلكتروني للمستخدم على وجه الخصوص بواسطة الموقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` لتوصيل المعلومات المختلفة وإدارة الحساب.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` The User's electronic address (e-mail) may in particular be used by the site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` for the communication of various information and the management of the account.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` L'adresse électronique (e-mail) de l'Utilisateur pourra notamment être utilisée par le site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` pour la communication d'informations diverses et la gestion du compte.`}</Text>
                    </>
                  },
              },
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  يضمن `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` احترام خصوصية المستخدم ، وفقًا للقانون رقم 09-08 بشأن حماية الأفراد فيما يتعلق بمعالجة البيانات الشخصية.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{``}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` guarantees respect for the User's privacy, in accordance with Law No 09-08 on the protection of individuals with regard to the processing of personal data.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{``}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` garantie le respect de la vie privée de l'Utilisateur, conformément à la loi N° 09-08 relative à la protection des personnes physiques à l'égard du traitement des données à caractère personnel.`}</Text>
                    </>
                  },
              },
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  يتم الإعلان عن الموقع إلى اللجنة الوطنية لحماية البيانات الشخصية (CNDP) تحت الرقم التالي: `}{render_term_service_custom_item(data.cndp_declaration_number || "cndp_declaration_number", styles.customItemStyle)}{`.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`The site is declared to the National Commission for the Protection of Personal Data (CNDP) under the following number: `}{render_term_service_custom_item(data.cndp_declaration_number || "cndp_declaration_number", styles.customItemStyle)}{`.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`Le site est déclaré auprès de la Commission Nationale de Contrôle de la Protection des Données à Caractère Personnel (CNDP) sous le numéro suivant : `}{render_term_service_custom_item(data.cndp_declaration_number || "cndp_declaration_number", styles.customItemStyle)}{`.`}</Text>
                    </>
                  },
              },
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  يحق للمستخدم الوصول إلى بياناته الشخصية وتصحيحها وحذفها والاعتراض عليها.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`The User has the right to access, rectify, delete and oppose his personal data.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`L'Utilisateur dispose du droit d'accès, de rectification, de suppression et d'opposition de ses données personnelles.`}</Text>
                    </>
                  },
              },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"الروابط التشعبية"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Hypertext links"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Liens hypertextes"}</Text>,
            },
            paragraphs: [
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  المجالات التي تؤدي إليها روابط النص التشعبي على الموقع ليست من مسؤولية ناشر `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` ، الذي لا يتحكم في هذه الروابط.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` The domains to which the hypertext links on the site lead are not the responsibility of the Publisher of `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`, who has no control over these links.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` Les domaines vers lesquels mènent les liens hypertextes présents sur le site n'engagent pas la responsabilité de l'Éditeur de `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{`, qui n'a pas de contrôle sur ces liens.`}</Text>
                    </>
                  },
              },
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  من الممكن لطرف ثالث إنشاء رابط لصفحة على الموقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` بدون إذن صريح من الناشر.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  It is possible for a third party to create a link to a page on the site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` without the express permission of the publisher.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  Il est possible pour un tiers de créer un lien vers une page du site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` sans autorisation expresse de l'éditeur.`}</Text>
                    </>
                  },
              },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"تطور الشروط العامة للاستخدام"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Evolution of the general conditions of use"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Évolution des conditions générales d'utilisation"}</Text>,
            },
            paragraphs: [
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  يحتفظ الموقع `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` بالحق في تعديل بنود هذه الشروط العامة للاستخدام في أي وقت وبدون مبرر.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` The site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` reserves the right to modify the clauses of these general conditions of use at any time and without justification.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` Le site `}{render_term_service_link(data.site_url || "site_url", data.site_url || "site_url", handleOpenUrl, styles.linkStyle)}{` se réserve le droit de modifier les clauses de ces conditions générales d'utilisation à tout moment et sans justification.`}</Text>
                    </>
                  },
              },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"مدة العقد"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Contract length"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Durée du contrat"}</Text>,
            },
            paragraphs: [
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  مدة هذا العقد غير محددة. ينتج عن العقد آثاره فيما يتعلق بالمستخدم من بداية استخدام الخدمة.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` The duration of this contract is indefinite. The contract produces its effects with regard to the User from the start of the use of the service.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` La durée du présent contrat est indéterminée. Le contrat produit ses effets à l'égard de l'Utilisateur à compter du début de l'utilisation du service.`}</Text>
                    </>
                  },
              },
            ]
        },
        {
            title: {
                ar: () => <Text style={styles.articleTitleTextStyle}>{"القانون الواجب التطبيق والاختصاص القضائي"}</Text>,
                en: () => <Text style={styles.articleTitleTextStyle}>{"Applicable law and competent jurisdiction"}</Text>,
                fr: () => <Text style={styles.articleTitleTextStyle}>{"Droit applicable et juridiction compétente"}</Text>,
            },
            paragraphs: [
              {
                  ar: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{`  هذا العقد يعتمد على التشريع المغربي. في حالة وجود نزاع لم يتم حله وديًا بين المستخدم والناشر ، فإن المحاكم المغربية هي المختصة بتسوية النزاع.`}</Text>
                    </>
                  },
                  en: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` This contract depends on Moroccan legislation. In the event of a dispute not resolved amicably between the User and the Publisher, the courts of Morocco are competent to settle the dispute.`}</Text>
                    </>
                  },
                  fr: () => {
                    return <>
                      <Text style={styles.paragraphContentStyle}>{` Le présent contrat dépend de la législation marocaine. En cas de litige non résolu à l'amiable entre l'Utilisateur et l'Éditeur, les tribunaux de Maroc sont compétents pour régler le contentieux.`}</Text>
                    </>
                  },
              },
            ]
        },
    ];
};

export const get_terms_service_notice = (props) => {
    return {
        ar: (handleItemClicked) => {
          return <>
            <Text style={{}}>{"   بالضغط على "}</Text>
            <Text style={styles.registrationLabelStyle}>{props.registration_label}</Text>
            <Text style={{}}>{" ، فإنك توافق على "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("terms_of_service")} testID="terms_of_service_test_id">{"شروط الخدمة"}</Text>
            <Text style={{}}>{" الخاصة بنا ، و"}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("data_use_policy")} testID="data_use_policy_test_id">{"سياسة استخدام البيانات"}</Text>
            <Text style={{}}>{" و"}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("cookie_policy")} testID="cookie_policy_test_id">{"سياسة ملفات تعريف الارتباط"}</Text>
            <Text style={{}}>{".الخاصة بنا"}</Text>
          </>
        },
        en: (handleItemClicked) => {
          return <>
            <Text style={{}}>{"   By pressing "}</Text>
            <Text style={styles.registrationLabelStyle}>{props.registration_label}</Text>
            <Text style={{}}>{", you agree to our "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("terms_of_service")} testID="terms_of_service_test_id">{"Terms of service"}</Text>
            <Text style={{}}>{", our "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("data_use_policy")} testID="data_use_policy_test_id">{"Data Use Policy"}</Text>
            <Text style={{}}>{" and our "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("cookie_policy")} testID="cookie_policy_test_id">{"Cookies Policy"}</Text>
            <Text style={{}}>{"."}</Text>
          </>
        },
        fr: (handleItemClicked) => {
          return <>
            <Text style={{}}>{"   En appuyant sur "}</Text>
            <Text style={styles.registrationLabelStyle}>{props.registration_label}</Text>
            <Text style={{}}>{", vous acceptez nos "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("terms_of_service")} testID="terms_of_service_test_id">{"Conditions d'utilisation"}</Text>
            <Text style={{}}>{", notre "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("data_use_policy")} testID="data_use_policy_test_id">{"Politique d'utilisation des données"}</Text>
            <Text style={{}}>{" et notre "}</Text>
            <Text style={styles.termStyle} onPress={() => handleItemClicked("cookie_policy")} testID="cookie_policy_test_id">{"Politique d'utilisation des cookies"}</Text>
            <Text style={{}}>{"."}</Text>
          </>
        },
    };
};

const styles = StyleSheet.create({
  articleTitleTextStyle: {
    fontWeight: "bold",
    fontSize: 15,
    color: COLORS.default_color,
  },
  paragraphContentStyle: {
    justifyContent: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    textAlign: 'justify',
  },
  paragraphContentCustomStyle: {
    marginTop: 10,
    marginBottom: 5,
  },
  registrationLabelStyle: {
    color: "#777",
    marginLeft: 5,
    marginRight: 5,
      fontWeight: "bold",
      fontSize: 15,
  },
  linkStyle: {
    color: "#0d6efd",
    marginLeft: 5,
    marginRight: 5,
      fontWeight: "bold",
      fontSize: 15,
  },
  boldBlackStyle: {
    color: "#000000",
    marginLeft: 5,
    marginRight: 5,
      fontWeight: "bold",
      fontSize: 15,
  },
  termStyle: {
    color: "#004eff",
    marginLeft: 5,
    marginRight: 5,
  },
  customItemStyle: {
    color: "#000000",
    marginLeft: 5,
    marginRight: 5,
      fontWeight: "bold",
      fontSize: 15,
  },
});
