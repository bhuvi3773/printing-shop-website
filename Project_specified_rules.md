# PROJECT-SPECIFIC RULES FOR CODING AGENTS

## 1. Project Instructions

These rules apply to the current project and must be followed alongside `GLOBAL_RULES.md`.

Before starting work:

1. Read `GLOBAL_RULES.md` if available.
2. Read this `AGENTS.md` file.
3. Read `PROJECT_BRIEF.md`, `TECH_STACK.md`, `WORKFLOW.md`, and `TESTING.md` when available.
4. Identify the approved project requirements and any restrictions.
5. Inspect the existing codebase before modifying files.

Do not begin implementation until the requirements needed for the current task are sufficiently clear.

## 2. Scope and Requirements

- Implement only the features and functionality required by the approved project brief.
- Do not invent additional features or expand the scope without discussing them with me.
- Do not remove existing functionality unless explicitly authorized.
- Identify dependencies between features before making changes.
- Ask questions when missing information could materially affect correctness.
- Clearly distinguish required functionality from optional improvements.
- Keep the implementation appropriate to the project's size, deadline, and technical requirements.

If a requirement conflicts with the existing implementation, explain the conflict and propose a solution before making a significant change.

## 3. Template Selection and Design Independence

The design template will be selected and approved separately by me.

Until I provide the selected template and its applicable instructions:

- Do not choose or impose a design template on my behalf.
- Do not independently establish design tokens, colour palettes, typography, visual themes, or animation styles.
- Do not redesign pages or introduce a new visual direction.
- Do not replace an approved template with another template.
- Do not install a UI library or design framework solely to pursue an unapproved design direction.
- Do not modify template-specific styling unnecessarily.

You may inspect the existing template and its technical structure to understand how to integrate the required functionality.

After I select a template, follow the instructions I provide for integrating it with the project while preserving the required functionality.

## 4. Project Inspection

Before implementing a feature or fixing a bug:

1. Inspect the relevant files and their dependencies.
2. Understand the existing implementation and expected behaviour.
3. Check the current Git branch and working-tree status.
4. Identify existing changes that must be preserved.
5. Determine which files need to change and why.
6. Identify relevant tests and possible regressions.

Do not replace complete files when a smaller, targeted modification is sufficient.

Do not assume that existing code is unused simply because its purpose is not immediately obvious.

## 5. Implementation Rules

- Follow the project's approved technology stack and existing conventions.
- Reuse existing components, utilities, services, and types where appropriate.
- Keep business logic organized and maintainable.
- Avoid duplicated logic and unnecessary dependencies.
- Validate inputs and handle errors appropriately.
- Use proper types and avoid unsafe shortcuts.
- Preserve existing API contracts and data structures unless a change is approved.
- Keep unrelated changes out of the current task.
- Document non-obvious implementation decisions when useful.
- Do not introduce placeholder implementations that appear complete but do not work.

When adding a feature, verify that its underlying functionality works rather than implementing only its visible interface.

## 6. Existing Functionality and Regression Prevention

Before modifying an existing feature, identify its current behaviour and dependencies.

After making changes:

- Verify the requested feature.
- Check related functionality that could be affected.
- Preserve authentication, authorization, navigation, integrations, and data flows where applicable.
- Avoid changing shared components without evaluating their other uses.
- Do not remove error handling, validation, or security controls to make a feature work.
- Report any known regression or unresolved issue immediately.

A successful change must satisfy the new requirement without unnecessarily breaking existing behaviour.

## 7. Git and File Safety

Git and file operations must preserve the project's existing state.

Before editing:

- Inspect the current branch.
- Check staged, unstaged, untracked, and relevant ignored files.
- Review relevant recent commits when necessary.
- Identify user changes that must remain untouched.

During implementation:

- Keep changes focused on the approved task.
- Do not overwrite existing user modifications.
- Review diffs before staging or committing.
- Do not delete files based solely on assumptions.
- Preserve environment files, local test data, configuration, and project assets.

Never perform the following without my explicit permission:

- Push to a remote repository.
- Merge changes into `main` or another protected branch.
- Reset, clean, or force-checkout over existing work.
- Delete branches or rewrite shared history.
- Replace the local project with a remote version in a way that could destroy local changes.
- Delete important project files or user data.

Do not commit automatically unless I request it.

## 8. Environment and Integration Safety

- Preserve existing environment files and their configuration.
- Never expose secrets or credentials in source code, frontend bundles, logs, or reports.
- Do not replace existing service endpoints or database connections without authorization.
- Do not change production configuration while working on local features.
- Do not use production services for tests that can be performed safely in isolation.
- Do not introduce new external integrations without an approved requirement.
- Do not assume that test credentials or test databases are available; verify the configuration safely.

If configuration changes are necessary, explain their purpose and scope before making consequential changes.

## 9. Database and API Rules

When the project uses a database or backend:

- Inspect the current schema, models, relationships, and API contracts.
- Follow existing validation and authorization patterns.
- Preserve data integrity and existing relationships.
- Test database-dependent functionality in an appropriate test environment.
- Never reset or delete database data without explicit permission.
- Never run destructive migrations against production without explicit authorization.
- Handle API errors and unexpected responses safely.
- Avoid exposing internal errors, sensitive data, or credentials to clients.
- Do not invent endpoint behaviour or assume an integration succeeded without verification.

Any schema or API changes must be documented and tested as appropriate.

## 10. Approval and Work Stages

For significant tasks, use this sequence:

### Stage 1: Analysis
Inspect the project, understand the requirements, and identify risks.

### Stage 2: Plan
Explain the proposed changes, affected files, dependencies, and verification approach.

### Stage 3: Approval
Wait for my approval when required by the agreed workflow or when the change is consequential, destructive, or outside the approved scope.

### Stage 4: Implementation
Make only the approved changes.

### Stage 5: Verification
Run relevant checks and inspect the resulting changes.

### Stage 6: Report
Summarize the implementation, verification results, and outstanding issues.

For tasks with explicitly approved batches, implement only the currently approved batch. Do not continue into later batches without permission.

Do not interpret approval of a plan as automatic approval for deployment, destructive actions, or unrelated changes.

## 11. Testing Requirements

Use the tests appropriate to the project's technology and functionality.

Where applicable:

- Run the build.
- Run type checks.
- Run linting.
- Run relevant unit and integration tests.
- Test affected API endpoints.
- Verify forms and input validation.
- Test important user journeys.
- Check related existing functionality for regressions.
- Review browser errors and failed requests when browser testing is available.

Do not claim that a test passed unless it was actually executed and passed.

If a check cannot be run, explain why and identify what remains unverified.

## 12. Local Development and Deployment

Local development and testing are permitted when they do not endanger existing work or production services.

Deployment and production modifications are prohibited unless I explicitly authorize the specific operation.

Never deploy, publish, push changes to GitHub, or release the application merely because:

- The build succeeds.
- The implementation appears complete.
- A feature is ready for testing.
- The project brief mentions a future launch.
- You believe deployment would be useful.

When a task is complete, leave the project in its current development environment unless I explicitly authorize another action.

## 13. Completion Criteria

A task is complete only when:

1. The approved requirements have been implemented.
2. Existing functionality has been preserved to the extent verified.
3. Relevant tests and checks have been executed where possible.
4. The final changes have been reviewed.
5. Known issues and unverified behaviour have been identified.
6. A clear completion report has been provided.

The final report must include:

- Summary of the changes.
- Files created or modified.
- Tests and checks actually performed.
- Results and any failures.
- Remaining issues or decisions required.

Never describe unfinished or untested functionality as fully working.

## 14. Final Rule

**Follow the approved project requirements, preserve existing work, implement in controlled stages, verify the results, and communicate honestly.**

Template and design instructions will be supplied separately by me. Do not establish or change the project's design direction until those instructions are provided.

Never deploy, publish, push, overwrite valuable work, or perform destructive operations without explicit authorization.