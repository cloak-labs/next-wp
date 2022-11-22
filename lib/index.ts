// Context
// export { NextWP } from './context/blockConfig';
export { default as BlockConfigProvider } from './context/blockConfig';

// Components
export { default as Blocks } from './Blocks'
export { default as Block } from './Block'

// Hooks
export { useGlobalConfig } from './hooks/useGlobalConfig';
export { useBlockConfig } from './hooks/useBlockConfig';
export { useBlockStyleBuilder } from './hooks/useBlockStyleBuilder';
export { usePage } from './hooks/usePage';
export { usePreview } from './hooks/usePreview';
export { usePost } from './hooks/usePost';
export { usePosts } from './hooks/usePosts';
export { usePaths } from './hooks/usePaths';

// Utils
export { deepMerge } from './utils/deepMerge'

// API
export { default as regenerateStaticPage } from './api/revalidate'
export { 
    fetchGraphAPI,
    useFetchRestAPI
} from './api/apiUtils';
