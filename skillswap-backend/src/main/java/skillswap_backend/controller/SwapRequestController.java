package skillswap_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import skillswap_backend.entity.SwapRequest;
import skillswap_backend.service.SwapRequestService;

@RestController
@RequestMapping("/swaprequests")
@CrossOrigin(origins = "*")
public class SwapRequestController {

    @Autowired
    private SwapRequestService swapRequestService;

    // Create Swap Request
    @PostMapping
    public SwapRequest createRequest(@RequestBody SwapRequest request) {
        return swapRequestService.createRequest(request);
    }

    // Get All Swap Requests
    @GetMapping
    public List<SwapRequest> getAllRequests() {
        return swapRequestService.getAllRequests();
    }

    // Get Swap Request By ID
    @GetMapping("/{id}")
    public SwapRequest getRequestById(@PathVariable Long id) {
        return swapRequestService.getRequestById(id);
    }

    // Accept Swap Request
    @PutMapping("/{id}/accept")
    public SwapRequest acceptRequest(@PathVariable Long id) {
        return swapRequestService.acceptRequest(id);
    }

    // Reject Swap Request
    @PutMapping("/{id}/reject")
    public SwapRequest rejectRequest(@PathVariable Long id) {
        return swapRequestService.rejectRequest(id);
    }

    // Delete Swap Request
    @DeleteMapping("/{id}")
    public String deleteRequest(@PathVariable Long id) {
        return swapRequestService.deleteRequest(id);
    }
}
