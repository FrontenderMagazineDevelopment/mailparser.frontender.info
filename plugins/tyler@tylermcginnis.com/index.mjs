import getRedirects from '@utils/getRedirects';
import getLinksFromText from '@utils/getLinksFromText';
import filterVendorLinks from '@utils/filterVendorLinks';
import banVendors from '@utils/banVendors';
import removeAnalytics from '@utils/removeAnalytics';
import removeDuplicates from '@utils/removeDuplicates';
import removeRootURL from '@utils/removeRootURL';
import getChapters from './utils/getChapters';
import removeHash from '@utils/removeHash';
import removeSearch from '@utils/removeSearch';

const vendor = 'reactjsnewsletter.com';

const helpers = [
  getChapters,
  getLinksFromText,
  getRedirects,
  filterVendorLinks(vendor),
  banVendors,
  removeAnalytics,
  removeHash,
  removeSearch,
  removeRootURL,
  removeDuplicates,
];

export default async (text) => helpers.reduce(async (text, helper) => {
    const resolved = await text;
    return helper(resolved);
  }, text);
