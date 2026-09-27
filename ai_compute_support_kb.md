# AI Compute Infrastructure Support Knowledge Base

Version: 1.0
Purpose: Internal reference for an AI compute infrastructure support agent.

## 1. Scope

This knowledge base covers first-line triage and support guidance for:
- GPU servers and compute nodes
- NVIDIA accelerators such as H100, H200, A100, B200, and workstation GPUs
- CUDA and GPU drivers
- AI training and inference infrastructure
- Network connectivity
- Local and attached storage
- Power and cooling symptoms
- Hardware provisioning and upgrade requests

This document is a support reference, not a substitute for data-center safety procedures or vendor documentation.

## 2. Severity and Escalation

### Critical incident
Treat an issue as critical when one or more of the following is reported:
- Smoke, sparking, burning smell, or other electrical danger
- Severe overheating accompanied by shutdowns or repeated thermal protection events
- A production compute node or cluster is unavailable
- Multiple machines or GPUs fail at the same time
- There is an active risk of data loss or storage failure
- A critical training or inference workload is disrupted
- A problem persists after reasonable troubleshooting and materially affects production

For a possible physical or electrical safety issue, stop the affected workload and follow local safety and data-center procedures. Do not continue stress testing equipment that is smoking, sparking, or repeatedly shutting down from severe heat.

### Support issue
Treat an issue as standard technical support when it requires troubleshooting but there is no immediate safety or major production risk. Examples:
- One GPU is not detected
- CUDA or driver mismatch
- Reduced GPU performance
- One workstation has a network problem
- A storage device behaves unexpectedly
- A component or peripheral is intermittent
- A user needs configuration help

### Hardware or capacity request
Treat an issue as a request when the user is asking for new capacity, hardware, an upgrade, provisioning, or replacement equipment rather than reporting an active incident.

## 3. GPU Not Detected

Recommended first checks:
1. Run `nvidia-smi`.
2. Record the exact output or error.
3. Confirm the operating system can see the device.
4. Confirm the NVIDIA driver is installed and loaded.
5. If appropriate for the environment, reboot the affected node once.
6. Check whether the issue affects one GPU, one node, or multiple nodes.
7. Record the GPU model, host name, driver version, CUDA version, and when the issue began.

Escalate if:
- The GPU remains unavailable after a normal reboot and driver verification.
- Multiple GPUs disappear at once.
- The failure is accompanied by power, thermal, PCIe, or hardware errors.
- Production capacity is materially affected.

Do not state that the GPU has physically failed unless diagnostics support that conclusion.

## 4. GPU Overheating

Useful information to collect:
- GPU model
- Current temperature
- Whether the temperature occurs at idle or under load
- Fan speed or cooling status if available
- Whether the GPU throttles, crashes, or shuts down
- Whether nearby GPUs or nodes show the same behavior
- Recent changes to workload, cooling, firmware, or hardware

Recommended first actions:
1. Stop or reduce intensive workloads if the system is repeatedly entering thermal protection or shutting down.
2. Verify that airflow is not obstructed.
3. Verify fans and cooling systems are operating.
4. Check whether the problem affects one accelerator or a larger part of the rack or cluster.
5. Review recent changes before replacing hardware.

Escalate immediately when overheating is severe, repeated shutdown occurs, multiple systems are affected, or a physical safety symptom is reported.

## 5. CUDA or Driver Problems

Collect:
- GPU model
- Operating system
- `nvidia-smi` output
- NVIDIA driver version
- CUDA toolkit version
- Framework and framework version, if relevant
- Exact error message
- Whether the issue began after an update

Recommended checks:
1. Verify that the installed driver supports the required CUDA environment.
2. Confirm `nvidia-smi` can communicate with the driver.
3. Confirm the application is using the intended CUDA environment.
4. Compare the working and non-working environment if another node is available.
5. Reproduce the issue with the smallest practical test.

Avoid unnecessary driver upgrades during an active production workload unless the change has been approved.

## 6. Reduced GPU Performance

Before assuming a hardware defect, collect:
- Baseline or expected performance
- Current observed performance
- GPU utilization
- GPU memory utilization
- Temperature and throttling indicators
- CPU utilization
- Storage throughput
- Network or interconnect utilization
- Workload changes
- Driver, CUDA, framework, or firmware changes

Potential categories include workload bottlenecks, thermal throttling, CPU starvation, storage bottlenecks, network/interconnect bottlenecks, software configuration changes, or hardware degradation.

Escalate when performance degradation is severe, persistent, affects multiple systems, or prevents a critical workload from running.

## 7. Network Connectivity

For a single-node connectivity problem:
1. Identify the affected host and network interface.
2. Confirm whether the host has link and an assigned address.
3. Test reachability to the expected gateway or peer.
4. Determine whether the issue is isolated to one host, one rack, or a wider segment.
5. Record recent configuration changes.

If many hosts lose connectivity at the same time or a production cluster is isolated, escalate as an infrastructure incident.

## 8. Storage and NVMe Issues

Collect:
- Host name
- Device identifier
- Capacity and free space
- Exact error message
- Whether the device is detected
- Whether reads, writes, or both are failing
- Whether the issue is intermittent
- Any recent kernel, firmware, or filesystem messages

If there is evidence of active data-loss risk, repeated device disappearance, or multiple storage devices failing, escalate.

Do not recommend destructive formatting, filesystem repair, or data deletion unless the appropriate owner has approved it and backups or recovery implications are understood.

## 9. Workstation Issues

For workstation hardware or AI development issues, collect:
- User and host name
- GPU model
- Operating system
- Driver and CUDA versions
- Exact symptom and error
- Whether the issue is reproducible
- Troubleshooting already attempted

Start with low-risk checks before replacing hardware.

## 10. Hardware and Capacity Requests

For new GPUs, workstations, upgrades, replacements, or compute allocations, collect:
- Requester identity
- Requested hardware or resource
- Quantity
- Intended workload
- Required capacity
- Expected project duration
- Needed-by date, if any
- Project or faculty sponsor, if applicable
- Existing allocation or equipment
- Business or research justification

Do not promise inventory, budget approval, or delivery dates until the appropriate owner confirms them.

## 11. Information Quality Rules

When responding:
- Do not invent host names, serial numbers, versions, temperatures, or diagnostic results.
- Preserve uncertainty when evidence is incomplete.
- Do not state that hardware has failed unless the evidence supports it.
- Ask only for information that materially helps the next troubleshooting or routing step.
- Use previous messages in the same support thread so users do not need to repeat themselves.
- Give physical safety concerns priority over continued troubleshooting.

## 12. Example Questions This Knowledge Base Should Answer

- "My H100 reaches 96C and shuts down. What should I do?"
- "nvidia-smi cannot see one GPU after a reboot. What should I collect?"
- "Our CUDA application stopped working after a driver update. What information do you need?"
- "Training is suddenly 40 percent slower. What should I check before replacing the GPU?"
- "Three nodes lost network connectivity at the same time. Is that an escalation?"
- "What information is needed to request four additional GPUs?"
