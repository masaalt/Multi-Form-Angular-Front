import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'منو',
    group: true,
  },
  {
    title: 'فرم های ورود اطلاعات',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'رابط',
        link: '/pages/forms/inputs',
      },
      {
        title: 'مسجد',
        link: '/pages/forms/mosque',
      },
      {
        title: 'کانون فرهنگی',
        link: '/pages/forms/center',
      },
      {
        title: 'فرهنگسرا',
        link: '/pages/forms/culture',
      },
      {
        title: 'مرکز مشاوره',
        link: '/pages/forms/clinic',
      },
      {
        title: 'دانشگاه',
        link: '/pages/forms/university',
      },
      {
        title: 'مکان مقدس',
        link: '/pages/forms/holyShrine',
      },
      {
        title: 'سینما',
        link: '/pages/forms/cinema',
      },
      {
        title: 'مرکز قرآنی',
        link: '/pages/forms/quranCenter',
      },
      {
        title: 'خیریه',
        link: '/pages/forms/charity',
      },
      {
        title: 'هیئت',
        link: '/pages/forms/group',
      },
      {
        title: 'فرق وادیان',
        link: '/pages/forms/otherGroups',
      },
      {
        title: 'کمپ ترک اعتیاد',
        link: '/pages/forms/smoke',
      },
      {
        title: 'فضای تبلیغاتی',
        link: '/pages/forms/entertisement',
      },
      {
        title: 'مدرسه',
        link: '/pages/forms/school',
      },
      {
        title: 'آموزشگاه',
        link: '/pages/forms/edu',
      },
      {
        title: 'مهدکودک',
        link: '/pages/forms/kidCenter',
      },
      {
        title: 'مهد قرآن',
        link: '/pages/forms/quranSchool',
      },
      {
        title: 'NGO',
        link: '/pages/forms/ngo',
      },
      {
        title: 'دستگاه حکومتی',
        link: '/pages/forms/goverments',
      },
      {
        title: 'تفرجگاه',
        link: '/pages/forms/hobby',
      },
      {
        title: 'باشگاه',
        link: '/pages/forms/gym',
      },
      {
        title: 'مرکز خرید',
        link: '/pages/forms/shoppingCenter',
      },
      {
        title: 'کارگاه',
        link: '/pages/forms/labor',
      },
      {
        title: 'کاروان',
        link: '/pages/forms/karevan',
      },
    ],
  },
  {
    title: 'گزارش ها',
    icon: 'grid-outline',
    children: [
      {
        title: 'گزارش مسجد',
        link: '/pages/forms/Report-mosque',
      },
      {
        title: 'اطلاعات مساجد',
        link: '/pages/report/mosque',
      },
      {
        title: 'گزارش مساجد',
        link: '/pages/tables/tree-grid',
      },
    ],
  },

  {
    title: 'ناحیه کاربری',
    icon: 'lock-outline',
    children: [
      {
        title: 'ورود',
        link: '/auth/login',
      },
      {
        title: 'ثبت نام',
        link: '/auth/register',
      },
      {
        title: 'دریافت مجدد رمز عبور',
        link: '/auth/request-password',
      },
      {
        title: 'فراموشی رمز عبور',
        link: '/auth/reset-password',
      },
    ],
  },
];
