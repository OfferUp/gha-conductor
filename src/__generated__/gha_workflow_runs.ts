/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: J4jer24sE9xHcMcWR9Jia/aJgdVvPdJ53F3uUIkMYScawRXi6Nczm8nGIvuoxKmwMstMqKT+b2c+apWxC+Kt6g==
 */

/* eslint-disable */
// tslint:disable

import {HookType} from './_enums'

interface GhaWorkflowRuns {
  check_run_id: (number) | null
  conclusion: (string) | null
  head_sha: string
  hook: HookType
  /**
   * @default nextval('gha_workflow_runs_id_seq'::regclass)
   */
  id: number & {readonly __brand?: 'gha_workflow_runs_id'}
  name: string
  pipeline_run_name: string
  pr_check_id: (number) | null
  pr_conclusion: (string) | null
  pr_number: number
  status: (string) | null
  workflow_job_id: (number) | null
  workflow_run_id: (number) | null
}
export default GhaWorkflowRuns;

interface GhaWorkflowRuns_InsertParameters {
  check_run_id?: (number) | null
  conclusion?: (string) | null
  head_sha: string
  hook: HookType
  /**
   * @default nextval('gha_workflow_runs_id_seq'::regclass)
   */
  id?: number & {readonly __brand?: 'gha_workflow_runs_id'}
  name: string
  pipeline_run_name: string
  pr_check_id?: (number) | null
  pr_conclusion?: (string) | null
  pr_number: number
  status?: (string) | null
  workflow_job_id?: (number) | null
  workflow_run_id?: (number) | null
}
export type {GhaWorkflowRuns_InsertParameters}