// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from '@prismicio/client'

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] }

type DynamicPageDocumentDataSlicesSlice =
  | HeroSlice
  | PricesSlice
  | ContactSlice
  | AddressSlice
  | HoursSlice
  | NoticeSlice
  | InformationSlice
  | TermsSlice

/**
 * Content for Dynamic Page documents
 */
interface DynamicPageDocumentData {
  /**
   * Page Title field in *Dynamic Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dynamic-page.pageTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pageTitle: prismic.KeyTextField

  /**
   * Slice Zone field in *Dynamic Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: dynamic-page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<DynamicPageDocumentDataSlicesSlice>
  /**
   * SEO Title field in *Dynamic Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dynamic-page.seoTitle
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  seoTitle: prismic.KeyTextField

  /**
   * SEO Description field in *Dynamic Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: dynamic-page.seoDescription
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  seoDescription: prismic.KeyTextField

  /**
   * SEO Image field in *Dynamic Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: dynamic-page.seoImage
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  seoImage: prismic.ImageField<never>
}

/**
 * Dynamic Page document from Prismic
 *
 * - **API ID**: `dynamic-page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type DynamicPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<DynamicPageDocumentData>,
    'dynamic-page',
    Lang
  >

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Text field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    'footer',
    Lang
  >

/**
 * Item in *Navigation → Menu items*
 */
export interface NavigationDocumentDataMenuItemsItem {
  /**
   * Title field in *Navigation → Menu items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.menuItems[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField

  /**
   * Link field in *Navigation → Menu items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.menuItems[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Item in *Navigation → Social items*
 */
export interface NavigationDocumentDataSocialItemsItem {
  /**
   * Social field in *Navigation → Social items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: instagram
   * - **API ID Path**: navigation.socialItems[].social
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  social: prismic.SelectField<'instagram' | 'facebook', 'filled'>

  /**
   * Link field in *Navigation → Social items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.socialItems[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * Logo field in *Navigation*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>

  /**
   * Menu Text field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Menu
   * - **API ID Path**: navigation.menuText
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  menuText: prismic.KeyTextField

  /**
   * Menu items field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.menuItems[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menuItems: prismic.GroupField<Simplify<NavigationDocumentDataMenuItemsItem>>

  /**
   * Social items field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.socialItems[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  socialItems: prismic.GroupField<
    Simplify<NavigationDocumentDataSocialItemsItem>
  >

  /**
   * Salonized Button Title field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.salonizedButtonTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  salonizedButtonTitle: prismic.KeyTextField

  /**
   * Salonized Voucher Button Title field in *Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.salonizedVoucherButtonTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  salonizedVoucherButtonTitle: prismic.KeyTextField
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    'navigation',
    Lang
  >

type ProductsDocumentDataSlicesSlice = ProductSlice

/**
 * Content for Products documents
 */
interface ProductsDocumentData {
  /**
   * Product group title field in *Products*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: products.groupTitle
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  groupTitle: prismic.TitleField

  /**
   * Notice field in *Products*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: products.notice
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  notice: prismic.RichTextField

  /**
   * Slice Zone field in *Products*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: products.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ProductsDocumentDataSlicesSlice>
}

/**
 * Products document from Prismic
 *
 * - **API ID**: `products`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProductsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<ProductsDocumentData>,
    'products',
    Lang
  >

export type AllDocumentTypes =
  | DynamicPageDocument
  | FooterDocument
  | NavigationDocument
  | ProductsDocument

/**
 * Primary content in *Address → Primary*
 */
export interface AddressSliceDefaultSlicePrimary {
  /**
   * Title field in *Address → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: address.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Address field in *Address → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: address.primary.address
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField
}

/**
 * Default slice variation for Address Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Address
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AddressSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<AddressSliceDefaultSlicePrimary>,
  never
>

/**
 * Slice variation for *Address*
 */
type AddressSliceVariation = AddressSliceDefaultSlice

/**
 * Address Shared Slice
 *
 * - **API ID**: `address`
 * - **Description**: Address
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AddressSlice = prismic.SharedSlice<'address', AddressSliceVariation>

/**
 * Primary content in *Contact → Primary*
 */
export interface ContactSliceDefaultSlicePrimary {
  /**
   * Title field in *Contact → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField
}

/**
 * Primary content in *Contact → Items*
 */
export interface ContactSliceDefaultSliceItem {
  /**
   * Icon field in *Contact → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: mail
   * - **API ID Path**: contact.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  icon: prismic.SelectField<'mail' | 'phone' | 'whatsapp', 'filled'>

  /**
   * Text field in *Contact → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField
}

/**
 * Default slice variation for Contact Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<ContactSliceDefaultSlicePrimary>,
  Simplify<ContactSliceDefaultSliceItem>
>

/**
 * Slice variation for *Contact*
 */
type ContactSliceVariation = ContactSliceDefaultSlice

/**
 * Contact Shared Slice
 *
 * - **API ID**: `contact`
 * - **Description**: Contact
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSlice = prismic.SharedSlice<'contact', ContactSliceVariation>

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultSlicePrimary {
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A nice description of your feature
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField

  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Cta field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta: prismic.KeyTextField
}

/**
 * Default slice variation for Hero Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<HeroSliceDefaultSlicePrimary>,
  never
>

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefaultSlice

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<'hero', HeroSliceVariation>

/**
 * Primary content in *Hours → Primary*
 */
export interface HoursSliceDefaultSlicePrimary {
  /**
   * Title field in *Hours → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: hours.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField
}

/**
 * Primary content in *Hours → Items*
 */
export interface HoursSliceDefaultSliceItem {
  /**
   * Day field in *Hours → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hours.items[].day
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  day: prismic.KeyTextField

  /**
   * Hours field in *Hours → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hours.items[].hours
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  hours: prismic.KeyTextField

  /**
   * Closed field in *Hours → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: hours.items[].closed
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  closed: prismic.BooleanField
}

/**
 * Default slice variation for Hours Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Hours
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HoursSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<HoursSliceDefaultSlicePrimary>,
  Simplify<HoursSliceDefaultSliceItem>
>

/**
 * Slice variation for *Hours*
 */
type HoursSliceVariation = HoursSliceDefaultSlice

/**
 * Hours Shared Slice
 *
 * - **API ID**: `hours`
 * - **Description**: Hours
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HoursSlice = prismic.SharedSlice<'hours', HoursSliceVariation>

/**
 * Primary content in *Information → Primary*
 */
export interface InformationSliceDefaultSlicePrimary {
  /**
   * Title field in *Information → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: information.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField
}

/**
 * Primary content in *Information → Items*
 */
export interface InformationSliceDefaultSliceItem {
  /**
   * Subtitle field in *Information → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: information.items[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.TitleField

  /**
   * Description field in *Information → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: information.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField

  /**
   * Image field in *Information → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: information.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>

  /**
   * Image position field in *Information → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: right
   * - **API ID Path**: information.items[].imagePosition
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  imagePosition: prismic.SelectField<'right' | 'left', 'filled'>
}

/**
 * Default slice variation for Information Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Information
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InformationSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<InformationSliceDefaultSlicePrimary>,
  Simplify<InformationSliceDefaultSliceItem>
>

/**
 * Slice variation for *Information*
 */
type InformationSliceVariation = InformationSliceDefaultSlice

/**
 * Information Shared Slice
 *
 * - **API ID**: `information`
 * - **Description**: Information
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InformationSlice = prismic.SharedSlice<
  'information',
  InformationSliceVariation
>

/**
 * Primary content in *Notice → Primary*
 */
export interface NoticeSliceDefaultSlicePrimary {
  /**
   * Text field in *Notice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: notice.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField
}

/**
 * Default slice variation for Notice Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Notice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NoticeSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<NoticeSliceDefaultSlicePrimary>,
  never
>

/**
 * Slice variation for *Notice*
 */
type NoticeSliceVariation = NoticeSliceDefaultSlice

/**
 * Notice Shared Slice
 *
 * - **API ID**: `notice`
 * - **Description**: Notice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NoticeSlice = prismic.SharedSlice<'notice', NoticeSliceVariation>

/**
 * Primary content in *Prices → Primary*
 */
export interface PricesSliceDefaultSlicePrimary {
  /**
   * Title field in *Prices → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: prices.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField
}

/**
 * Primary content in *Prices → Items*
 */
export interface PricesSliceDefaultSliceItem {
  /**
   * Products field in *Prices → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: prices.items[].products
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  products: prismic.ContentRelationshipField<'products'>

  /**
   * Position field in *Prices → Items*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: auto
   * - **API ID Path**: prices.items[].position
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  position: prismic.SelectField<'auto' | 'left' | 'right', 'filled'>
}

/**
 * Default slice variation for Prices Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Prices
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricesSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<PricesSliceDefaultSlicePrimary>,
  Simplify<PricesSliceDefaultSliceItem>
>

/**
 * Slice variation for *Prices*
 */
type PricesSliceVariation = PricesSliceDefaultSlice

/**
 * Prices Shared Slice
 *
 * - **API ID**: `prices`
 * - **Description**: Prices
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PricesSlice = prismic.SharedSlice<'prices', PricesSliceVariation>

/**
 * Primary content in *Product → Primary*
 */
export interface ProductSliceDefaultSlicePrimary {
  /**
   * Product name field in *Product → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: product.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField

  /**
   * Product description field in *Product → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: A nice description of your feature
   * - **API ID Path**: product.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField
}

/**
 * Primary content in *Product → Items*
 */
export interface ProductSliceDefaultSliceItem {
  /**
   * Price field in *Product → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product.items[].price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField

  /**
   * Time field in *Product → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: product.items[].time
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  time: prismic.NumberField
}

/**
 * Default slice variation for Product Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Product
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<ProductSliceDefaultSlicePrimary>,
  Simplify<ProductSliceDefaultSliceItem>
>

/**
 * Slice variation for *Product*
 */
type ProductSliceVariation = ProductSliceDefaultSlice

/**
 * Product Shared Slice
 *
 * - **API ID**: `product`
 * - **Description**: Product
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProductSlice = prismic.SharedSlice<'product', ProductSliceVariation>

/**
 * Primary content in *Terms → Primary*
 */
export interface TermsSliceDefaultSlicePrimary {
  /**
   * Title field in *Terms → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: This is where it all begins...
   * - **API ID Path**: terms.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField
}

/**
 * Primary content in *Terms → Items*
 */
export interface TermsSliceDefaultSliceItem {
  /**
   * Subtitle field in *Terms → Items*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: terms.items[].subtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  subtitle: prismic.TitleField

  /**
   * Description field in *Terms → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: terms.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField
}

/**
 * Default slice variation for Terms Slice
 *
 * - **API ID**: `default-slice`
 * - **Description**: Terms
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TermsSliceDefaultSlice = prismic.SharedSliceVariation<
  'default-slice',
  Simplify<TermsSliceDefaultSlicePrimary>,
  Simplify<TermsSliceDefaultSliceItem>
>

/**
 * Slice variation for *Terms*
 */
type TermsSliceVariation = TermsSliceDefaultSlice

/**
 * Terms Shared Slice
 *
 * - **API ID**: `terms`
 * - **Description**: Terms
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TermsSlice = prismic.SharedSlice<'terms', TermsSliceVariation>

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>
  }

  namespace Content {
    export type {
      DynamicPageDocument,
      DynamicPageDocumentData,
      DynamicPageDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataMenuItemsItem,
      NavigationDocumentDataSocialItemsItem,
      ProductsDocument,
      ProductsDocumentData,
      ProductsDocumentDataSlicesSlice,
      AllDocumentTypes,
      AddressSlice,
      AddressSliceDefaultSlicePrimary,
      AddressSliceVariation,
      AddressSliceDefaultSlice,
      ContactSlice,
      ContactSliceDefaultSlicePrimary,
      ContactSliceDefaultSliceItem,
      ContactSliceVariation,
      ContactSliceDefaultSlice,
      HeroSlice,
      HeroSliceDefaultSlicePrimary,
      HeroSliceVariation,
      HeroSliceDefaultSlice,
      HoursSlice,
      HoursSliceDefaultSlicePrimary,
      HoursSliceDefaultSliceItem,
      HoursSliceVariation,
      HoursSliceDefaultSlice,
      InformationSlice,
      InformationSliceDefaultSlicePrimary,
      InformationSliceDefaultSliceItem,
      InformationSliceVariation,
      InformationSliceDefaultSlice,
      NoticeSlice,
      NoticeSliceDefaultSlicePrimary,
      NoticeSliceVariation,
      NoticeSliceDefaultSlice,
      PricesSlice,
      PricesSliceDefaultSlicePrimary,
      PricesSliceDefaultSliceItem,
      PricesSliceVariation,
      PricesSliceDefaultSlice,
      ProductSlice,
      ProductSliceDefaultSlicePrimary,
      ProductSliceDefaultSliceItem,
      ProductSliceVariation,
      ProductSliceDefaultSlice,
      TermsSlice,
      TermsSliceDefaultSlicePrimary,
      TermsSliceDefaultSliceItem,
      TermsSliceVariation,
      TermsSliceDefaultSlice,
    }
  }
}
