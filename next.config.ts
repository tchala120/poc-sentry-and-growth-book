import { withSentryConfig } from '@sentry/nextjs'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	output: 'export',
}

export default withSentryConfig(nextConfig, {
	org: process.env.NEXT_PUBLIC_SENTRY_ORGANIZATION,
	project: process.env.NEXT_PUBLIC_SENTRY_PROJECT,

	silent: !process.env.CI,

	widenClientFileUpload: true,

	webpack: {
		automaticVercelMonitors: true,
		treeshake: {
			removeDebugLogging: true,
		},
	},
})
